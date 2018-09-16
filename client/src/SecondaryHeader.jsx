import React from 'react';
import './SecondaryHeader.css';
import arrowBack from './baseline-arrow_back-24px.svg';

const SecondaryHeader = () => (
  <header className="mdc-top-app-bar mdc-elevation--z2 header-background">
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <img src={arrowBack} alt="arrow_back" className="arrow_back" />
        <span className="mdc-top-app-bar__title">Recipe</span>
      </section>
    </div>
  </header>
);
export default SecondaryHeader;
