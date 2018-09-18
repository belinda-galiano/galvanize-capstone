import React from 'react';
import PropTypes from 'prop-types';

import './SecondaryHeader.css';

const SecondaryHeader = ({ name }) => (
  <header className="mdc-top-app-bar mdc-elevation--z2 header-background">
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <i className="material-icons style-arrow-back">
arrow_back
        </i>
        <span className="mdc-top-app-bar__title">{name}</span>
      </section>
    </div>
  </header>
);
export default SecondaryHeader;

SecondaryHeader.propTypes = {
  name: PropTypes.string.isRequired,
};
