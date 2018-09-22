import React from 'react';
import './IngredientForm.css';

import SecondaryHeader from './SecondaryHeader';
import TextField from './TextField';
import BtnSave from './BtnSave';


const IngredientForm = () => (
  <div>
    <SecondaryHeader name="Add Ingredient" />
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="form-container">
        <div className="qty-units-align">
          <div className="mdc-text-field mdc-text-field--outlined">
            <input type="text" id="td-outlined" className="mdc-text-field__input" />
            <label htmlFor="tf-outlined" className="mdc-floating-label">
          min
            </label>
            <div className="mdc-notched-outline">
              <svg>
                <path className="mdc-notched-outline__path" />
              </svg>
            </div>
            <div className="mdc-notched-outline__idle" />
          </div>
          <div className="qty-units-align">
            <div className="mdc-select mdc-select--outlined units-cell">
              <select className="mdc-select__native-control">
            ...
              </select>
              <label className="mdc-floating-label">Kg</label>
              <div className="mdc-notched-outline">
                <svg>
                  <path className="mdc-notched-outline__path" />
                </svg>
              </div>
              <div className="mdc-notched-outline__idle" />
            </div>
          </div>
        </div>
        <TextField name="Ingredient" />
        <TextField name="notes" />
        <div className="align-right">
          <BtnSave name="Done" />
        </div>
      </div>
    </div>
  </div>
);
export default IngredientForm;
