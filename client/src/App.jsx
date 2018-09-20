import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import RecipePage from './RecipePage';
import NutritionFactsPage from './NutritionFactsPage';
import RecipeForm from './RecipeForm';
import IngredientForm from './IngredientForm';
import DirectionsForm from './DirectionsForm';
import HomePage from './HomePage';
import { recipes, nutrition } from './data';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HomePage path="/" recipes={recipes} />
          <DirectionsForm path="/directions-form" />
          <IngredientForm path="/ingredient-form" />
          <RecipeForm path="/recipe-form" />
          <NutritionFactsPage path="/nutrition-facts" nutrition={nutrition} />
          <RecipePage path="/recipe" recipe={recipes[0]} />
        </Router>
      </div>
    );
  }
}

export default App;
