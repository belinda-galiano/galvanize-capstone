import React from 'react';

const Search = () => (
  <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
    <i className="material-icons mdc-text-field__icon" tabIndex="0" role="button">search</i>
    <input type="text" id="my-input" className="mdc-text-field__input" />
    <label htmlFor="my-input" className="mdc-floating-label">Search</label>
    <div className="mdc-notched-outline">
      <svg>
          <path className="mdc-notched-outline__path" />
        </svg>
    </div>
    <div className="mdc-notched-outline__idle" />
  </div>
);
export default Search;
