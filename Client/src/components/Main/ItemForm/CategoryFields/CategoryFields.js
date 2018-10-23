import React, { Component } from 'react';
import RemoveSubCatButton from './RemoveSubCatButton';

export default class CategoryFields extends Component {
    render() {
        return (
            <>
                {
                    this.props.path.map((segment, i) => {
                        const label = i === 0 ? 'Category' : i === this.props.path.length-1 ? 'Item' : `Sub-Category ${i}`;
                        return (
                            <div key={`category${i}`} className='row'>
                                <div className='col'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text small-font">{label}</span>
                                        </div>
                                        <input
                                            type="text" 
                                            className="form-control" 
                                            name={`category${i}`} 
                                            value={segment} 
                                            onChange={this.props.handleChange} />
                                        {
                                            label !== 'Category' && label !== 'Item' &&
                                                <RemoveSubCatButton 
                                                    index={i} 
                                                    removeSubCategory={this.props.removeSubCategory} />
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </>
        );
    }
}