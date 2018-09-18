import React, { Component } from 'react';
import './RecipeForm.css';

import TimeInput from './TimeInput';
import Servings from './Servings';
import IngredientsInput from './IngredientsInput';
import AddBtn from './AddBtn';
import TextField from './TextField';
import AddImage from './AddImage';
import Textarea from './Textarea';
import SaveBtn from './SaveBtn';

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
          <IngredientsInput ingredient={ingredient} ingredQty={ingredQty} />
          <IngredientsInput ingredient={ingredient} ingredQty={ingredQty} />
          <AddBtn name="Add recipe" />
          <h5 className="mdc-typography--subtitle2">Directions</h5>
          <p className="mdc-typography--body2 highlight-line">We recomend write the directions by steps</p>
          <div className="el-style">
            <p className="mdc-typography--body1">
              <span>1. </span>
            Preheat the oven to 375F (190C).
            </p>
          </div>
          <Textarea name="Next step" />
          <AddBtn name="Add Direction" />
          <h5 className="mdc-typography--subtitle2">Notes</h5>
          <Textarea name="Notes" />
          <div className="align-rigth">
            <SaveBtn name="Save" />
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeForm;
