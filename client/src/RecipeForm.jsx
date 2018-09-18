import React, { Component } from 'react';
import './RecipeForm.css';
import TimeInput from './TimeInput';
import Servings from './Servings';
import IngredientsInput from './IngredientsInput';
import BttnAddMain from './BttnAddMain';
import TextField from './TextField';
import AddImage from './AddImage';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Title',
      active: 23,
      total: [1, 20],
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
      name, active, total, servings, ingredient, ingredQty,
    } = this.state;
    return (
      <div className="form-container">
        <TextField name="Title" className="" />
        <TextField name="Add link or source website" />
        <AddImage name="Add image" />
        <TextField name="Tags" />
        <h5>Time</h5>
        <TimeInput name="Active" />
        <TimeInput name="Total" />
        <Servings servings={servings} />
        <h5>Ingredients</h5>
        <IngredientsInput ingredient={ingredient} ingredQty={ingredQty} />
        <IngredientsInput ingredient={ingredient} ingredQty={ingredQty} />
        <BttnAddMain name="Add recipe" />
        <h5>Directions</h5>
        <p>We recomend write the directions by steps</p>

        <BttnAddMain name="Add Direction" />
      </div>
    );
  }
}
export default RecipeForm;
