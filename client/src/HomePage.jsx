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
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="homepage-container">
        <div className="search-align">
          <Search />
        </div>
        { recipes.map(recipe => <RecipeCardContainer {...recipe} key={recipe.title} />)}
        <button className="mdc-button see-allbtn-align">
            See all
        </button>
        <div className="divider-line" />
        <Link to="/recipe-form" className="mdc-button mdc-button--outlined mdc-elevation--z2 mdc-typography--button">
        CREATE RECIPE
        </Link>
        {/* <div className="divider-line" /> */}
        {/* <button className="mdc-button mdc-button--unelevated mdc-typography--button sign-up-btn">
        Sign Up
        </button>
        <p>It's free!</p> */}
      </div>
    </div>
    <Footer />
  </div>
);
export default HomePage;
