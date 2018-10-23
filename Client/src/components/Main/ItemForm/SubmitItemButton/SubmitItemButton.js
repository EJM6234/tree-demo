import React, { Component } from 'react';

export default class SubmitItemButton extends Component {
    render() {
        return (
            <div className='col-6'>
                <button 
                    className="btn btn-block btn-secondary"
                    disabled={this.props.path.includes("")}
                    onClick={this.props.handleSubmit}>
                        Submit
                </button>
            </div>
        );
    }
}