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


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HomePage path="/" recipes={recipes} />
          <RecipePage path="/recipe" recipe={recipes[0]} />
          <IngredientsList path="/ingredient-list" ingredients={recipes[0].ingredients} />
          <NutritionFactsPage path="/nutrition-facts" nutrition={nutrition} />
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
