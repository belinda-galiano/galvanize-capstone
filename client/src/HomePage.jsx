import React from 'react';
import './HomePage.css';

import Search from './Search';
import RecipeCard from './RecipeCard';


const HomePage = () => (
  <div>
    <div className="mdc-top-app-bar--fixed">
      <div className="homepage-container">
        <div className="search-align">
          <Search />
        </div>

      </div>
      <RecipeCard />
    </div>
  </div>
);
export default HomePage;
