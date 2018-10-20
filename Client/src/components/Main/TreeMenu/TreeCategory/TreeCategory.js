import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import TreeItem from './TreeItem';

export default class TreeCategory extends Component {
    state = {
        isOpen: false
    }

    handleOpen = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        const categories = Object.keys(this.props.treeRenderData);
        return (
            <ul>    
                <div onClick={this.handleOpen}>
                    <i className={this.state.isOpen ? 'fa fa-angle-down' : 'fa fa-angle-right'} />
                    <span>{this.props.category}</span>
                </div>
                <Collapse isOpen={this.state.isOpen}>
                    {
                        categories.map((category, i) => {
                            if(!Array.isArray(this.props.treeRenderData[category])) {
                                return (
                                    <TreeCategory 
                                        key={i} 
                                        category={category}
                                        handleChange={this.handleChange}
                                        handleDelete={this.props.handleDelete}
                                        handlePriceUpdate={this.props.handlePriceUpdate}
                                        treeRenderData={this.props.treeRenderData[category]} />
                                );
                            } else {
                                return (
                                    <TreeItem 
                                        key={i}
                                        category={category}
                                        handleChange={this.handleChange}
                                        handleDelete={this.props.handleDelete}
                                        handlePriceUpdate={this.props.handlePriceUpdate}                                        
                                        id={this.props.treeRenderData[category][0]}
                                        price={this.props.treeRenderData[category][1]} />
                                );
                            }
                        })
                    }
                </Collapse>
            </ul>
        )
    }
}