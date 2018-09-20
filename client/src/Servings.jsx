import React from 'react';
import PropTypes from 'prop-types';

import './Servings.css';

const Servings = ({ servings }) => (
  <div>
    <h5 className="mdc-typography--subtitle2">Servings</h5>
    <div className="serv-menu-position">
      <div className="mdc-select mdc-select--outlined serving-cell">
        <select className="mdc-select__native-control">
   ...
        </select>
        <label className="mdc-floating-label">{servings}</label>
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
export default Servings;

Servings.propTypes = {
  servings: PropTypes.number.isRequired,
};
