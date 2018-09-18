import React from 'react';
import PropTypes from 'prop-types';
import './AddImage.css';

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
export default AddImage;

AddImage.propTypes = {
  name: PropTypes.string.isRequired,
};
