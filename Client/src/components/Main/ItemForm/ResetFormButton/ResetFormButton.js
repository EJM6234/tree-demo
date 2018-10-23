import React, { Component } from 'react';

export default class ResetFormButton extends Component {
    render() {
        return (
            <div className='col-6'>
                <button
                    className="btn btn-block btn-secondary"
                    onClick={this.props.resetForm}>
                        Reset Form
                </button>
            </div>
        );
    }
}