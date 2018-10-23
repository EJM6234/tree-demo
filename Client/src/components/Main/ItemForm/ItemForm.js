import React, { Component } from 'react';
import './ItemForm.css';
import SubCatButton from './SubCatButton';
import CategoryFields from './CategoryFields';
import PriceField from './PriceField';
import SubmitItemButton from './SubmitItemButton/SubmitItemButton';
import ResetFormButton from './ResetFormButton/ResetFormButton';

// Form for adding a new item to tree view
export default class ItemForm extends Component {
    render() {
        return (
            <div className='row align-items-center flex'>
                <div className='col m-4'>
                    <SubCatButton 
                        path={this.props.path} 
                        addSubCategory={this.props.addSubCategory} />
                    <CategoryFields 
                        path={this.props.path} 
                        handleChange={this.props.handleChange} 
                        removeSubCategory={this.props.removeSubCategory} />
                    <PriceField 
                        price={this.props.price} 
                        handleChange={this.props.handleChange} />
                    <div className='row'>
                        <SubmitItemButton 
                            path={this.props.path}
                            handleSubmit={this.props.handleSubmit} />
                        <ResetFormButton resetForm={this.props.resetForm} />
                    </div>
                </div>
            </div>
        )
    }
}