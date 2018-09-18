import React from 'react';
import './TimeInput.css';


const TimeInput = ({ name }) => (
  <div>
    <div className="time-container">
      <i className="material-icons">
timelapse
      </i>
      <p>{name}</p>
      <div className="mdc-text-field mdc-text-field--outlined form-el-margin time-cell">
        <input type="text" id="tf-outlined" className="mdc-text-field__input" />
        <label htmlFor="tf-outlined" className="mdc-floating-label">
hours
        </label>
        <div className="mdc-notched-outline">
          <svg>
            <path className="mdc-notched-outline__path" />
          </svg>
        </div>
        <div className="mdc-notched-outline__idle" />
      </div>
      <div className="mdc-text-field mdc-text-field--outlined time-cell">
        <input type="text" id="tf-outlined" className="mdc-text-field__input" />
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
    </div>
  </div>
);

export default TimeInput;
