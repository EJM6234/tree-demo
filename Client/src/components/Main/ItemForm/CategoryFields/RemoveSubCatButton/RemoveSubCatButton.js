import React, { Component } from 'react';

export default class RemoveSubCatButton extends Component {
    render() {
        return (
            <div className="input-group-append">
                <button 
                    id={`removeSub${this.props.index}`} 
                    onClick={this.props.removeSubCategory}
                    className="btn btn-outline-secondary small-font" 
                    type="button" >
                        Remove
                </button>
            </div>
        );
    }
}