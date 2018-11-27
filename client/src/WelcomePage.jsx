import React from 'react';
import './WelcomePage.css';

import SecondaryHeader from './SecondaryHeader';

const WelcomePage = () => (
  <div className="welcome-body">
    <SecondaryHeader />
    <div className="mdc-top-app-bar--fixed-adjust" />
    <h3 className="mdc-typography--subtitle1 subtitle-login">Log in</h3>
    <div className="welcomepage-container">
      <h1 className="mdc-typography--headline2">Welcome to</h1>
      <div className="logo-welcome">
        <h3 className="mdc-typography--headline4">Plan my Meal</h3>
      </div>
      <div className="column-center">
        <button type="button" className="mdc-button mdc-button--unelevated btn-add-style mdc-typography--button signup-button signup-google">
          Continue with Google
        </button>
        <button type="button" className="mdc-button mdc-button--unelevated btn-add-style mdc-typography--button signup-button signup-account">
          Create Account
        </button>
      </div>
      <p className="mdc-typography--body1">It is free!</p>
      <p className="mdc-typography--caption terms">
        By tapping Continue, Create Account or More
        options, I agree to Plan my Meal’s Terms of Service, Payments Terms of Service, Privacy Policy, and Non-Discrimination Policy.
      </p>
    </div>
  </div>

);

export default WelcomePage;
