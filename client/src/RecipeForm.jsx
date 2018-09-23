import React, { Component } from 'react';
import { Link } from '@reach/router';
import './RecipeForm.css';

import IngredientListEdit from './IngredientListEdit';
import TextField from './TextField';
import Textarea from './Textarea';
import BtnSave from './BtnSave';
import MainHeader from './MainHeader';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      imageUrl: '',
      activeHours: '',
      activeMinutes: '',
      totalHours: '',
      totalMinutes: '',
      servings: '4',
      iname: '',
      iqty: '',
      inote: '',
      ingredients: [],
    };

    this.addIngredient = this.addIngredient.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addIngredient() {
    const ingredients = [...this.state.ingredients];
    ingredients.push({
      name: this.state.iname,
      qty: this.state.iqty,
      note: this.state.inote,
    });

    // { ingredients: ingredients } == { ingredients }
    this.setState({
      iname: '',
      iqty: '',
      inote: '',
      ingredients,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.dataset.field]: event.target.value,
    });
  }

  render() {
    const {
      title, servings, ingredients, tags, imageUrl, activeHours, activeMinutes, totalHours, totalMinutes, iname, iqty, inote,
    } = this.state;

    return (
      <div>
        <MainHeader className="" />
        <div className="mdc-top-app-bar--prominent-fixed-adjust" />
        <div className="form-container">
          <TextField name="Title" value={title} onChange={this.handleChange} field="title" />
          <TextField name="Add image" value={imageUrl} onChange={this.handleChange} field="imageUrl" icon="insert_photo" />
          <TextField name="Tags" value={tags} onChange={this.handleChange} field="tags" />
          <h5 className="mdc-typography--subtitle2">Time</h5>
          <div className="time-container">
            <i className="material-icons">timelapse</i>
            <p>Active</p>
            <TextField value={activeHours} onChange={this.handleChange} field="activeHours" textCls="time-cell" />
            <TextField value={activeMinutes} onChange={this.handleChange} field="activeMinutes" textCls="time-cell" />
          </div>
          <div className="time-container">
            <i className="material-icons">timelapse</i>
            <p>Total</p>
            <TextField value={totalHours} onChange={this.handleChange} field="totalHours" textCls="time-cell" />
            <TextField value={totalMinutes} onChange={this.handleChange} field="totalMinutes" textCls="time-cell" />
          </div>
          <TextField name="Servings" value={servings} field="servings" onChange={this.handleChange} />
          <div className="my-text-label" style={{ marginTop: '16px' }}>Ingredients</div>
          <IngredientListEdit ingredients={ingredients} />
          <TextField name="Name" value={iname} field="iname" onChange={this.handleChange} />
          <TextField name="Quantity" value={iqty} field="iqty" onChange={this.handleChange} />
          <TextField name="Note" value={inote} field="inote" onChange={this.handleChange} />
          <button type="button" className="mdc-button mdc-button--unelevated btn-add-style mdc-typography--button" onClick={this.addIngredient}>
            <i className="material-icons mdc-button__icon" aria-hidden="true">add</i>
              Add ingredient
          </button>
          <h5 className="mdc-typography--subtitle2">Directions</h5>
          <p className="mdc-typography--body2 highlight-line">We recomend write the directions by steps</p>
          <div className="el-style">
            <p className="mdc-typography--body1">
              <span>1. </span>
                Preheat the oven to 375F (190C).
            </p>
          </div>
          <Link to="/directions-form" className="mdc-button mdc-button--unelevated btn-add-style mdc-typography--button">
            <i className="material-icons mdc-button__icon" aria-hidden="true">add</i>
              Add directions
          </Link>
          <h5 className="mdc-typography--subtitle2">Notes</h5>
          <Textarea name="Notes" value="" />
          <div className="align-right">
            <BtnSave name="Save" />
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeForm;
