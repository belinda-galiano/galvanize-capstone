import React, { Component } from 'react';
import './RecipeForm.css';
import TimeInput from './TimeInput';
import Servings from './Servings';
import IngredientsInput from './IngredientsInput';
import BttnAddMain from './BttnAddMain';

const TextField = ({ name }) => (
  <div className="mdc-text-field mdc-text-field--outlined form-el-margin">
    <input type="text" id="tf-outlined" className="mdc-text-field__input" />
    <label htmlFor="tf-outlined" className="mdc-floating-label">{name}</label>
    <div className="mdc-notched-outline">
      <svg>
        <path className="mdc-notched-outline__path" />
      </svg>
    </div>
    <div className="mdc-notched-outline__idle" />
  </div>
);
const AddImage = ({ name }) => (
  <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
    <i className="material-icons mdc-text-field__icon" tabIndex="0" role="button">insert_photo</i>
    <input type="text" id="my-input" className="mdc-text-field__input" />
    <label htmlFor="my-input" className="mdc-floating-label">{name}</label>
    <div className="mdc-notched-outline">
      <svg>
        <path className="mdc-notched-outline__path" />
      </svg>
    </div>
    <div className="mdc-notched-outline__idle" />
  </div>
);

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
        <TextField name="Title" />
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
