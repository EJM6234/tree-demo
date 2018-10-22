import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import TreeItem from './TreeItem';

export default class TreeCategory extends Component {
    state = {
        isOpen: false
    }

    // Handle whether children in tree view are collapsed or not
    handleOpen = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        const categories = Object.keys(this.props.treeRenderData);
        return (
            <ul className="mx-4 my-1 p-0">    
                <div onClick={this.handleOpen}>
                    <i className={this.state.isOpen ? 'fa fa-angle-down' : 'fa fa-angle-right'} />
                    <span className='ml-2 font-weight-bold'>{this.props.category}</span>
                </div>
                <Collapse isOpen={this.state.isOpen}>
                    {
                        categories.map((category, i) => {
                            // If array does not exist and nesting goes deeper, render another collapsible category
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
                            // If we reach the end of the object nesting, render the item component
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