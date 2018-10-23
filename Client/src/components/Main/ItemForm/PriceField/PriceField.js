import React, { Component } from 'react';

export default class PriceField extends Component {
    render() {
        return (
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
        );
    }
}