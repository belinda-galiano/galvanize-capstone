import React from 'react';
import PropTypes from 'prop-types';
import './SaveBtn.css';

const SaveBtn = ({ name }) => (
  <div>
    <button className="mdc-button mdc-button--raised btn-color mdc-typography--button">
      {name}
    </button>
  </div>
);
export default SaveBtn;

SaveBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
