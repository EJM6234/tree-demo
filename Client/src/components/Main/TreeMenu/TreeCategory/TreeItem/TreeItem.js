import React, { Component } from 'react';
import './TreeItem.css';

export default class TreeItem extends Component {
    state = {
        isUpdating: false,
        editPrice: undefined
    }

    // Handle input change for editPrice
    handleChange = (e) => {
        this.setState({ editPrice: e.target.value })
    }

    // Handle deletion of item, runs handleDelete in Main
    handleDeleteClick = () => {
        this.props.handleDelete(this.props.id);
    }

    // Toggles update price input field
    handleUpdateClick = () => {
        this.setState((prevState, props) => ({ 
            isUpdating: !prevState.isUpdating,
            editPrice: props.price  
        }));
        if(this.state.isUpdating) this.props.handlePriceUpdate(this.props.id, this.state.editPrice);
    }

    render() {
        return (
            <div className="ml-4 my-1 p-0">
                <li>
                    <i className='fa fa-trash trash' onClick={this.handleDeleteClick} />
                    <i className='fa fa-pencil-alt pencil' onClick={this.handleUpdateClick} />
                    {this.props.category}: 
                    {
                        this.state.isUpdating 
                            ? <> 
                                <span className="ml-2 font-italic">$</span> 
                                <input 
                                    autoFocus
                                    type="text"
                                    className='font-italic edit-form-control'
                                    name={`priceUpdate${this.props.id}`} 
                                    value={this.state.editPrice} 
                                    onChange={this.handleChange} />
                            </>
                            : <span className='font-italic ml-2'>${this.props.price}</span>
                    }
                </li>

            </div>
        )
    }
}