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
        <div className="headline6-align">
          <h6 className="mdc-typography--headline6 headline6-style">Recipes</h6>
        </div>
        { recipes.map(recipe => <RecipeCard {...recipe} key={recipe.title} />)}
        <button className="mdc-button see-allbtn-align">
            See all
        </button>
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
