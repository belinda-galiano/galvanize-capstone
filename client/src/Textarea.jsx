import React from 'react';
import PropTypes from 'prop-types';
import './Textarea.css';

const Textarea = ({ name }) => (
  <div className="mdc-text-field mdc-text-field--outlined el-style">

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
export default Textarea;

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
};
