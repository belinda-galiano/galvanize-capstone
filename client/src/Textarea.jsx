import React from 'react';
import PropTypes from 'prop-types';
import './Textarea.css';

const Textarea = ({ name }) => (
  <div className="mdc-text-field mdc-text-field--textarea">
    <textarea id="textarea" className="mdc-text-field__input" rows="2" cols="40" />
    <label htmlFor="textarea" className="mdc-floating-label">{name}</label>
  </div>
);
export default Textarea;

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
};
