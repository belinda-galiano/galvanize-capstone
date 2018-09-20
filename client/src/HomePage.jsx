import React from 'react';
import './HomePage.css';

import Search from './Search';
import RecipeCard from './RecipeCard';


const HomePage = ({ recipes }) => (
  <div>
    <div className="mdc-top-app-bar--fixed">
      <div className="homepage-container">
        <div className="search-align">
          <Search />
        </div>
        <div className="divider-line" />
        <h6 className="mdc-typography--subtitle1">Recipes</h6>
        <button className="mdc-button btn-align">
            See all
        </button>
        { recipes.map(recipe => <RecipeCard {...recipe} />)}
        <div className="divider-line" />
        <button className="mdc-button mdc-button--outlined mdc-elevation--z2 mdc-typography--button">
        CREATE RECIPE
        </button>
        <div className="divider-line" />
        <button className="mdc-button mdc-button--unelevated mdc-typography--button sign-up-btn">
        Sign Up
        </button>
        <p>It's free!</p>
      </div>
    </div>
  </div>
);
export default HomePage;
