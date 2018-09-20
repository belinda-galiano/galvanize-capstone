import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';

import RecipePage from './RecipePage';
import NutritionFactsPage from './NutritionFactsPage';
import RecipeForm from './RecipeForm';
import IngredientForm from './IngredientForm';
import DirectionsForm from './DirectionsForm';
import HomePage from './HomePage';
import IngredientListEdit from './IngredientListEdit';
import IngredientsList from './IngredientsList';

import { recipes, nutrition } from './data';

const RecipeTemporary = ({ id }) => {
  const recipe = recipes.filter(recipe => recipe.id == id).pop();

  return <RecipePage recipe={recipe} />;
};


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HomePage path="/" recipes={recipes} />
          <RecipeTemporary path="/recipe/:id" />
          <IngredientsList path="/ingredient-list" ingredients={recipes[0].ingredients} />
          <NutritionFactsPage path="/nutrition-facts/:id" nutrition={nutrition} />
          <RecipeForm path="/recipe-form" />
          <IngredientListEdit path="/ingredient-input" key={recipes[0].ingredients} />
          <IngredientForm path="/ingredient-form" />
          <DirectionsForm path="/directions-form" />
        </Router>
      </div>
    );
  }
}

export default App;
