import React from 'react';
import './HomePage.css';
import { Link } from '@reach/router';

import Search from './Search';
import RecipeCardContainer from './RecipeCardContainer';
import MainHeader from './MainHeader';
import Footer from './Footer';


const HomePage = ({ recipes }) => (
  <div>
    <MainHeader />
    <div className="mdc-top-app-bar--prominent-fixed-adjust">
      <div className="homepage-container">
        <div className="search-align">
          <Search />
        </div>
        {recipes.map(recipe => <RecipeCardContainer {...recipe} key={recipe.title} />)}
        <button type="button" className="mdc-button see-allbtn-align">
          See all
        </button>
        <div className="divider-line" />
        <Link to="/recipe-form" className="mdc-button mdc-button--outlined mdc-elevation--z2 mdc-typography--button" style={{ marginTop: '24px', marginBottom: '24px' }}>
          CREATE RECIPE
        </Link>
        <div className="divider-line" />
        <Link to="/welcome-page" type="button" className="mdc-button mdc-button--unelevated">
          Sign Up
        </Link>
        <p>It's free!</p>
        <button type="button" className="mdc-button mdc-button--raised">Log in</button>
      </div>
    </div>
    <Footer />
  </div>
);
export default HomePage;
