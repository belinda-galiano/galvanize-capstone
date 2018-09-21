import React, { Component } from 'react';
import { Link } from '@reach/router';
import './RecipeForm.css';

import TimeInput from './TimeInput';
import Servings from './Servings';
import IngredientListEdit from './IngredientListEdit';
import TextField from './TextField';
import Textarea from './Textarea';
import AddImage from './AddImage';
import BtnSave from './BtnSave';
import SecondaryHeader from './SecondaryHeader';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      // active: 23,
      // total: [1, 20],
      servings: 4,
      ingredient: 'garlic',
      ingredQty: 12,
    };
  }

  componentDidMount() {
    document.querySelectorAll('.mdc-text-field').forEach((el) => {
      // eslint-disable-next-line
      const x = new mdc.textField.MDCTextField(el);
    });
  }

  render() {
    const {
      servings, ingredient, ingredQty,
    } = this.state;
    return (
      <div>
        <SecondaryHeader />
        <div className="mdc-top-app-bar--fixed-adjust">
          <div className="form-container">
            <TextField name="Title" className="" />
            <AddImage name="Add image" />
            <TextField name="Tags" />
            <h5 className="mdc-typography--subtitle2">Time</h5>
            <TimeInput name="Active" />
            <TimeInput name="Total" />
            <Servings servings={servings} />
            <h5 id="ingredients-list-form" className="mdc-typography--subtitle2">Ingredients</h5>
            <IngredientListEdit ingredient={ingredient} ingredQty={ingredQty} />
            <Link to="/ingredient-form" className="mdc-button mdc-button--unelevated btn-add-style mdc-typography--button">
              <i className="material-icons mdc-button__icon" aria-hidden="true">add</i>
              Add ingredient
            </Link>
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
            <Textarea />
            <div className="align-right">
              <BtnSave name="Save" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeForm;
