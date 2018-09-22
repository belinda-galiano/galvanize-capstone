import React from 'react';
import './MyRecipes.css';

import MainHeader from './MainHeader';
import Search from './Search';
import RecipeCardContainer from './RecipeCardContainer';
import Footer from './Footer';

const MyRecipes = ({ recipes }) => (
  <div>
    <MainHeader />
    <div className="mdc-top-app-bar--prominent-fixed-adjust" />
    <div className="my-recipes-container">
      <div className="search-align">
        <Search />
      </div>
      <div className="divider-line" />
      <div className="headline6-align">
        <h6 className="mdc-typography--headline6 headline6-style">My Recipes</h6>
      </div>
      { recipes.map(recipe => <RecipeCardContainer {...recipe} key={recipe.title} />)}
    </div>
    <Footer />
  </div>
);
export default MyRecipes;
