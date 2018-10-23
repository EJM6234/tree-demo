import React, { Component } from 'react';

export default class SubCatButton extends Component {
    render() {
        return (
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
        );
    }
}