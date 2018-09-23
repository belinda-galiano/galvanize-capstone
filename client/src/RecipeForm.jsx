import React, { Component } from 'react';
import './RecipeForm.css';

import IngredientListEdit from './IngredientListEdit';
import TextField from './TextField';
import SecondaryHeader from './SecondaryHeader';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      image: '',
      activeHours: '',
      activeMinutes: '',
      totalHours: '',
      totalMinutes: '',
      servings: '4',
      iname: '',
      iqty: '',
      inote: '',
      ingredients: [],
      directions: [],
      step: '',
      notes: '',
    };

    this.addIngredient = this.addIngredient.bind(this);
    this.addDirection = this.addDirection.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addDirection() {
    const directions = [...this.state.directions];
    directions.push(this.state.step);

    this.setState({
      directions,
      step: '',
    });
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveRecipe({
      ...this.state,
      tags: this.state.tags.split(),
      time: {
        active: [Number(this.state.activeHours), Number(this.state.activeMinutes)],
        total: [Number(this.state.totalHours), Number(this.state.totalMinutes)],
      },
    });
  }

  render() {
    const {
      title, servings, ingredients, tags, activeHours, activeMinutes, totalHours, totalMinutes, iname, iqty, inote, directions, step, notes,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <SecondaryHeader name="Create Recipe" />
        <div className="mdc-top-app-bar--fixed-adjust" />
        <div className="form-container">
          <TextField name="Title" value={title} onChange={this.handleChange} field="title" />
          <TextField name="Add image" value={this.state.image} onChange={this.handleChange} field="image" icon="insert_photo" />
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
          <div className="my-text-label">Directions</div>
          <p className="mdc-typography--body2 highlight-line">We recomend write the directions by steps</p>
          <div className="el-style">
            <ol className="mdc-typography--body1">
              {directions.map((direction, i) => <li key={i}>{direction}</li>)}
            </ol>
          </div>
          <TextField value={step} field="step" onChange={this.handleChange} isTextArea textCls="form-textarea" />
          <button type="button" className="mdc-button mdc-button--unelevated btn-add-style mdc-typography--button" onClick={this.addDirection}>
            <i className="material-icons mdc-button__icon" aria-hidden="true">add</i>
              Add directions
          </button>
          <TextField name="Notes" value={notes} field="notes" onChange={this.handleChange} isTextArea textCls="form-textarea" />
          <div className="align-right">
            <button type="submit" className="mdc-button mdc-button--raised btn-color mdc-typography--button">
          Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default RecipeForm;
