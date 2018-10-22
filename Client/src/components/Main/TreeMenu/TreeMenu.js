import React, { Component } from 'react';
import Loading from './Loading';
import TreeCategory from './TreeCategory';
import './TreeMenu.css';

export default class TreeMenu extends Component {
    render() {
        // Get base categories from this.props.treeRenderData and recursively render TreeCategory for each category
        let categoryKeys;
        if(Object.keys(this.props.treeRenderData).length > 0) categoryKeys = Object.keys(this.props.treeRenderData);
        return (
            <div className="my-4">
                {
                    categoryKeys 
                        ? categoryKeys.map((category, i) => {
                            return <TreeCategory 
                                key={i} 
                                category={category}
                                handleDelete={this.props.handleDelete}
                                handlePriceUpdate={this.props.handlePriceUpdate}
                                treeRenderData={this.props.treeRenderData[category]} />
                        })
                        : this.props.isLoading 
                            ? <div className="text-center w-100 mt-5">
                                <Loading className="mt-4 text-center" />
                            </div> 
                            : <p className="text-center">No data to display</p>
                }
            </div>
        )
    }
}