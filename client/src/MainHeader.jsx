import React, { Component } from 'react';
import { Link } from '@reach/router';
import './MainHeader.css';

import NavDrawer from './NavDrawer';

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isHidden } = this.state;
    // this toggle the menu
    this.setState({
      isHidden: !isHidden,
    });
  }

  render() {
    const { isHidden } = this.state;
    let menu;

    if (!isHidden) {
      menu = <NavDrawer handleClick={this.handleClick} />;
    }

    return (
      <div>
        { menu }
        <header className="mdc-top-app-bar  mdc-elevation--z2 header-background">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <i className="material-icons menu-icon-style" onClick={this.handleClick}>
                menu
              </i>

              <span className="mdc-top-app-bar__title">Plan my Meal</span>
            </section>
          </div>
          <div className="mdc-tab-bar" role="tablist">
            <div className="mdc-tab-scroller">
              <div className="mdc-tab-scroller__scroll-area">
                <div className="mdc-tab-scroller__scroll-content">
                  <Link to="/" type="button" className="mdc-tab mdc-tab--active mdc-tab--stacked" role="tab" aria-selected="true" tabIndex="0">
                    <span className="mdc-tab__content">
                      <span className="mdc-tab__icon material-icons">home</span>
                      <span className="mdc-tab__text-label">HOME</span>
                    </span>
                    <span className="mdc-tab-indicator mdc-tab-indicator--active">
                      <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                    </span>
                    <span className="mdc-tab__ripple" />
                  </Link>
                  <Link to="/my-recipes" type="button" className="mdc-tab mdc-tab--active mdc-tab--stacked" role="tab" aria-selected="true" tabIndex="0">
                    <span className="mdc-tab__content">
                      <span className="mdc-tab__icon material-icons">favorite</span>
                      <span className="mdc-tab__text-label">Favorites</span>
                    </span>
                    <span className="mdc-tab-indicator mdc-tab-indicator--active">
                      <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                    </span>
                    <span className="mdc-tab__ripple" />
                  </Link>
                  <Link to="/recipe-form" type="button" className="mdc-tab mdc-tab--active mdc-tab--stacked" role="tab" aria-selected="true" tabIndex="0">
                    <span className="mdc-tab__content">
                      <span className="mdc-tab__icon material-icons">add</span>
                      <span className="mdc-tab__text-label">Recipe</span>
                    </span>
                    <span className="mdc-tab-indicator mdc-tab-indicator--active">
                      <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                    </span>
                    <span className="mdc-tab__ripple" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

    );
  }
}
export default MainHeader;
