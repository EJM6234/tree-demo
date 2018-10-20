import React, { Component } from 'react';
import TreeCategory from './TreeCategory';

export default class TreeMenu extends Component {
    render() {
        let categoryKeys;
        if(this.props.treeRenderData) categoryKeys = Object.keys(this.props.treeRenderData);
        return (
            <>
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
                        : null
                }
            </>
        )
    }
}