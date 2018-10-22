import React, { Component } from 'react';
import './Content.css';

// Generic container for sectioning app
export default class Content extends Component {
    render() {
        return (
            <div className='content-container'>
                {this.props.children}
            </div>
        )
    }
}