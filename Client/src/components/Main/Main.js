import React, { Component } from 'react';
import axios from 'axios';
import Content from './Content/Content';
import ItemForm from './ItemForm';
import TreeMenu from './TreeMenu';
import { setupTreeData } from '../../helpers/setupTreeData';
import './Main.css';

export default class Main extends Component {
    state = {
        path: ["", ""],
        price: "0",
        treeRenderData: {}
    }

    componentDidMount() {
        axios
            .get('/items')
            .then((res) => {
                let treeRenderData = {};
                res.data.forEach((item) => {
                    const path = item.path.split(".");
                    setupTreeData(path, treeRenderData, path, treeRenderData, item.price, item.id);
                });
                this.setState({ treeRenderData });
            })
            .catch((err) => console.error(err));
    }

    addSubCategory = () => {
        if(this.state.path.length < 12) {
            let prevPath = this.state.path;
            let path = prevPath.slice(0, prevPath.length-1).concat(["", prevPath[prevPath.length-1]]);
            this.setState({ path });
        }
    }

    clearForm = () => {
        this.setState({ 
            path: ["", ""],
            price: "0"
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        if(e.target.name.match(/category/g) !== null) {
            let path = this.state.path;
            path[parseInt(e.target.name.match(/\d+/g)[0])] = e.target.value;
            this.setState({ path });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

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

    removeSubCategory = (e) => {
        const prevPath = this.state.path;
        const removeIndex = parseInt(e.target.id.match(/\d+/g));
        const path = prevPath.filter((val, i) => i !== removeIndex);
        this.setState({ path });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Content>
                            <ItemForm
                                addSubCategory={this.addSubCategory}
                                clearForm={this.clearForm} 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit} 
                                path={this.state.path}
                                price={this.state.price}
                                removeSubCategory={this.removeSubCategory} />
                        </Content>
                    </div>
                    <div className='col-6'>
                        <Content>
                            <TreeMenu 
                                handleChange={this.handleChange}
                                handleDelete={this.handleDelete}
                                handlePriceUpdate={this.handlePriceUpdate}
                                treeRenderData={this.state.treeRenderData} />
                        </Content>
                    </div>
                </div>
            </div>
        );
    }
}