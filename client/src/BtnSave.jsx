import React from 'react';
import PropTypes from 'prop-types';
import './BtnSave.css';

const BtnSave = ({ name }) => (
  <div>
    <button className="mdc-button mdc-button--raised btn-color mdc-typography--button">
      {name}
    </button>
  </div>
);
export default BtnSave;

BtnSave.propTypes = {
  name: PropTypes.string.isRequired,
};
