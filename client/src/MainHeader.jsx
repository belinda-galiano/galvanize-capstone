import React from 'react';
import './MainHeader.css';

const MainHeader = () => (

  <div>
    <header className="mdc-top-app-bar mdc-elevation--z2 header-background">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <i className="material-icons menu-icon-style">
menu
          </i>
          <span className="mdc-top-app-bar__title">Plan my Meal</span>
        </section>
      </div>
    </header>
  </div>
);
export default MainHeader;
