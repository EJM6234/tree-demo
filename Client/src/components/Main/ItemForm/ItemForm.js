import React, { Component } from 'react';
import './ItemForm.css';

// Form for adding a new item to tree view
export default class ItemForm extends Component {
    render() {
        return (
            <div className='row align-items-center flex'>
                <div className='col m-4'>
                    {/* Add sub-category button */}
                    <div className='row mb-3'>
                        <div className='col'>
                            <button
                                className="btn btn-block btn-secondary" 
                                disabled={!(this.props.path.length <7)} 
                                onClick={this.props.addSubCategory}>
                                    Add Sub-Category
                            </button>
                        </div>
                    </div>
                    {/* Categories and item form fields */}
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
                                                    <div className="input-group-append">
                                                        <button 
                                                            id={`removeSub${i}`} 
                                                            onClick={this.props.removeSubCategory}
                                                            className="btn btn-outline-secondary small-font" 
                                                            type="button" >
                                                                Remove
                                                        </button>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    {/* Price field */}
                    <div className='row'>
                        <div className='col'>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name={`price`} 
                                    value={this.props.price} 
                                    onChange={this.props.handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {/* Submit button */}
                        <div className='col-6'>
                            <button 
                                className="btn btn-block btn-secondary"
                                disabled={this.props.path.includes("")}
                                onClick={this.props.handleSubmit}>
                                    Submit
                            </button>
                        </div>
                        {/* Reset form button */}
                        <div className='col-6'>
                            <button
                                className="btn btn-block btn-secondary"
                                onClick={this.props.resetForm}>
                                    Reset Form
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}