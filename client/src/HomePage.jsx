import React from 'react';
import './HomePage.css';

import Search from './Search';
import RecipeCard from './RecipeCard';


const HomePage = () => (
  <div>
    <div className="homepage-container">
      <div className="mdc-top-app-bar--fixed">
        <div className="homepage-container">
          <div className="search-align">
            <Search />
          </div>
          <div className="subtitle-align">
            <h6 className="mdc-typography--subtitle1">Recipes</h6>
          </div>
          <div className="btn-align">
            <button className="mdc-button">
            See all
            </button>
          </div>
          <RecipeCard name="1 recipe" />
          <RecipeCard name="1 recipe" />
          <RecipeCard name="1 recipe" />
          <RecipeCard name="1 recipe" />

        </div>
      </div>
    </div>
  </div>
);
export default HomePage;
