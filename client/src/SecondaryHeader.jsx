import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import './SecondaryHeader.css';

const SecondaryHeader = ({ name }) => (
  <header className="mdc-top-app-bar mdc-elevation--z2 header-background">
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <Link to="/">
          <i className="material-icons style-arrow-back">
arrow_back
          </i>

        </Link>
        <span className="mdc-top-app-bar__title mdc-typography--headline6">{name}</span>
      </section>
    </div>
  </header>
);
export default SecondaryHeader;

SecondaryHeader.propTypes = {
  name: PropTypes.string.isRequired,
};
