import React, { Component } from 'react';

export default class TreeItem extends Component {
    state = {
        isUpdating: false,
        editPrice: undefined
    }

    handleChange = (e) => {
        this.setState({ editPrice: e.target.value })
    }

    handleDeleteClick = () => {
        this.props.handleDelete(this.props.id);
    }

    handleUpdateClick = () => {
        this.setState((prevState, props) => ({ 
            isUpdating: !prevState.isUpdating,
            editPrice: props.price  
        }));
        if(this.state.isUpdating) this.props.handlePriceUpdate(this.props.id, this.state.editPrice);
    }

    render() {
        return (
            <ul>
                <li>
                    {this.props.category}:
                    {
                        this.state.isUpdating 
                            ? <input 
                                name={`priceUpdate${this.props.id}`} 
                                value={this.state.editPrice} 
                                onChange={this.handleChange} />
                            : <span>${this.props.price}</span>
                    }
                    <i className='fa fa-trash' onClick={this.handleDeleteClick} />
                    <i className='fa fa-pencil-alt' onClick={this.handleUpdateClick} />
                </li>

            </ul>
        )
    }
}