import React from 'react';

const NavDrawer = ({ handleClick }) => (
  <React.Fragment>
    <aside className="mdc-drawer mdc-drawer--modal mdc-drawer--open">
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          <a className="mdc-list-item mdc-list-item--activated" href="#" aria-selected="true">
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
            <span className="mdc-list-item__text">Inbox</span>
          </a>
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
