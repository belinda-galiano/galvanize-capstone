import React from 'react';
import './AddBtn.css';

const AddBtn = ({ name }) => (
  <div className="left-align">
    <button className="mdc-button mdc-button--unelevated btn-style mdc-typography--button">
      <i className="material-icons mdc-button__icon" aria-hidden="true">add</i>
      {name}
    </button>
  </div>
);
export default AddBtn;
