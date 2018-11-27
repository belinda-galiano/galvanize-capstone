import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const NavDrawer = ({ handleClick }) => (
  <React.Fragment>
    <aside className="mdc-drawer mdc-drawer--modal mdc-drawer--open">
      {/* <div className="mdc-drawer__header">
        <h3 className="mdc-drawer__title">Mail</h3>
        <h6 className="mdc-drawer__subtitle">email@material.io</h6>
      </div> */}
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          <Link to="/welcome-page">
            {/* <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i> */}
            <span className="mdc-list-item__text">Log in</span>
          </Link>

          <a className="mdc-list-item" href="#">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
            <span className="mdc-list-item__text">Outgoing</span>
          </a>
          <a className="mdc-list-item" href="#">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
            <span className="mdc-list-item__text">Drafts</span>
          </a>
        </nav>
      </div>
    </aside>

    <div className="mdc-drawer-scrim" onClick={handleClick} />

  </React.Fragment>
);

export default NavDrawer;

NavDrawer.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
