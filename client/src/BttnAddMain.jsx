import React from 'react';
import './BttnAddMain.css';

const BttnAddMain = ({ name }) => (

  <button className="mdc-button mdc-button--unelevated">
    <i className="material-icons mdc-button__icon" aria-hidden="true">add</i>
    {name}
  </button>

);
export default BttnAddMain;
