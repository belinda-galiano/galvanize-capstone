import React, { Component } from 'react';
import { Link } from '@reach/router';
import './RecipeForm.css';

import TimeInput from './TimeInput';
import Servings from './Servings';
import IngredientListEdit from './IngredientListEdit';
import BtnAdd from './BtnAdd';
import TextField from './TextField';
import AddImage from './AddImage';
import Textarea from './Textarea';
import BtnSave from './BtnSave';

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
      <div className="mdc-top-app-bar--fixed-adjust">
        <div className="form-container">
          <TextField name="Title" className="" />
          <TextField name="Add link or source website" />
          <AddImage name="Add image" />
          <TextField name="Tags" />
          <h5 className="mdc-typography--subtitle2">Time</h5>
          <TimeInput name="Active" />
          <TimeInput name="Total" />
          <Servings servings={servings} />
          <h5 className="mdc-typography--subtitle2">Ingredients</h5>
          <IngredientListEdit ingredient={ingredient} ingredQty={ingredQty} />
          <IngredientListEdit ingredient={ingredient} ingredQty={ingredQty} />
          <Link to="/IngredientForm"><BtnAdd name="Add ingredient" /></Link>
          <h5 className="mdc-typography--subtitle2">Directions</h5>
          <p className="mdc-typography--body2 highlight-line">We recomend write the directions by steps</p>
          <div className="el-style">
            <p className="mdc-typography--body1">
              <span>1. </span>
            Preheat the oven to 375F (190C).
            </p>
          </div>
          <BtnAdd name="Add Direction" />
          <h5 className="mdc-typography--subtitle2">Notes</h5>
          <div className="align-right">
            <BtnSave name="Save" />
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeForm;
