import React from 'react';
import { Router } from '@reach/router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import reducer from './reducer';
import RecipePageContainer from './RecipePageContainer';
import NutritionFactsPage from './NutritionFactsPage';
import RecipeFormContainer from './RecipeFormContainer';
import HomeContainer from './HomeContainer';
import MyRecipesContainer from './MyRecipesContainer';
import IngredientsList from './IngredientsList';

import { recipes, dataNutrition } from './data';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router>
      <HomeContainer path="/" />
      <MyRecipesContainer path="/my-recipes" />
      <RecipePageContainer path="/recipe/:id" />
      <IngredientsList path="/ingredient-list" ingredients={recipes[0].ingredients} />
      <NutritionFactsPage path="/nutrition-facts/:id" nutrition={dataNutrition[0]} />
      <RecipeFormContainer path="/recipe-form" />
    </Router>
  </Provider>
);

export default App;
