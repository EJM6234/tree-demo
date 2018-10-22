import React, { Component } from 'react';
import axios from 'axios';
import Content from './Content/Content';
import ItemForm from './ItemForm';
import TreeMenu from './TreeMenu';
import { setupTreeData } from '../../helpers/setupTreeData';

export default class Main extends Component {
    state = {
        isLoading: true,
        path: ["", ""],
        price: "0",
        treeRenderData: {}
    }

    componentDidMount() {
        // Get saved data for tree view from database
        axios
            .get('/items')
            .then((res) => {
                let treeRenderData = {};
                res.data.forEach((item) => {
                    const path = item.path.split(".");
                    setupTreeData(path, treeRenderData, path, treeRenderData, item.price, item.id);
                });
                this.setState({ 
                    treeRenderData, 
                    isLoading: false 
                });
            })
            .catch((err) => console.error(err));
    }

    // Add a new sub-category to form
    addSubCategory = () => {
        if(this.state.path.length < 7) {
            let prevPath = this.state.path;
            let path = prevPath.slice(0, prevPath.length-1).concat(["", prevPath[prevPath.length-1]]);
            this.setState({ path });
        }
    }

    // Resets form to original state
    resetForm = () => {
        this.setState({ 
            path: ["", ""],
            price: "0"
        })
    }

    // Handle changes for all inputs
    handleChange = (e) => {
        e.preventDefault();
        // Handles events for form inputs
        if(e.target.name.match(/category/g) !== null) {
            let path = this.state.path;
            path[parseInt(e.target.name.match(/\d+/g)[0])] = e.target.value;
            this.setState({ path });
        // Handles all other inputs
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    // Handles item deletion from tree view
    handleDelete = (id) => {
        axios
            .delete(`/items/${id}`)
            .then((res) => {
                const treeRenderData = {};
                res.data.forEach((item) => {
                    const path = item.path.split(".");
                    setupTreeData(path, treeRenderData, path, treeRenderData, item.price, item.id);
                });
                this.setState({ treeRenderData });
            })
            .catch((err) => console.error(err));
    }

    // Handles price updates in tree view
    handlePriceUpdate = (id, editPrice) => {
        axios
            .put(`/items/${id}`, {
                price: editPrice
            })
            .then((res) => {
                const treeRenderData = {};
                res.data.forEach((item) => {
                    const path = item.path.split(".");
                    setupTreeData(path, treeRenderData, path, treeRenderData, item.price, item.id);
                });
                this.setState({ treeRenderData });
            })
            .catch((err) => console.error(err));
    }

    // Handles form submission in ItemForm
    handleSubmit = () => {
        axios
            .post('/items/create', {
                path: this.state.path.join('.'),
                price: this.state.price
            })
            .then((res) => {
                const path = res.data.path.split(".");
                const prevTreeRenderData = this.state.treeRenderData;
                const treeRenderData = setupTreeData(path, prevTreeRenderData, path, prevTreeRenderData, res.data.price, res.data.id);
                this.setState({ treeRenderData });
            })
            .catch(err => console.error(err));
    }

    // Removes sub-category from ItemForm
    removeSubCategory = (e) => {
        console.log(e.target);
        const prevPath = this.state.path;
        const removeIndex = parseInt(e.target.id.match(/\d+/g));
        const path = prevPath.filter((val, i) => i !== removeIndex);
        this.setState({ path });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-xs-12 my-4 my-lg-0'>
                        <Content>
                            <ItemForm
                                addSubCategory={this.addSubCategory}
                                resetForm={this.resetForm} 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit} 
                                path={this.state.path}
                                price={this.state.price}
                                removeSubCategory={this.removeSubCategory} />
                        </Content>
                    </div>
                    <div className='col-lg-6 col-xs-12 mb-4 mb-lg-0'>
                        <Content>
                            <TreeMenu 
                                handleChange={this.handleChange}
                                handleDelete={this.handleDelete}
                                handlePriceUpdate={this.handlePriceUpdate}
                                isLoading={this.state.isLoading}
                                treeRenderData={this.state.treeRenderData} />
                        </Content>
                    </div>
                </div>
            </div>
        );
    }
}