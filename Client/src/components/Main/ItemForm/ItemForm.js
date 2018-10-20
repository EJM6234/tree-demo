import React, { Component } from 'react';

export default class ItemForm extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col'>
                    {
                        this.props.path.map((segment, i) => {
                            const label = i === 0 ? 'Category' : i === this.props.path.length-1 ? 'Item' : `Sub-Category ${i}`;
                            return (
                                <div key={`category${i}`} className='row'>
                                    <div className='col'>
                                        <label htmlFor={`category${i}`}>{label}</label>
                                        <input 
                                            name={`category${i}`} 
                                            value={segment} 
                                            onChange={this.props.handleChange} />
                                        {
                                            label !== 'Category' && label !== 'Item' &&
                                                <button 
                                                    id={`removeSub${i}`} 
                                                    onClick={this.props.removeSubCategory}>
                                                        -
                                                </button>
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor={`price`}>Price</label>
                            <input 
                                name={`price`} 
                                value={this.props.price} 
                                onChange={this.props.handleChange} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button 
                                disabled={this.props.path.length >= 12} 
                                onClick={this.props.addSubCategory}>
                                    Add Sub-Category
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button 
                                disabled={this.props.path.includes("")}
                                onClick={this.props.handleSubmit}>
                                    Submit
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button
                                onClick={this.props.clearForm}>
                                    Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}