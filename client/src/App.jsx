import React from 'react';
import { Router } from '@reach/router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import reducer from './reducer';
import RecipePage from './RecipePage';
import NutritionFactsPage from './NutritionFactsPage';
import RecipeForm from './RecipeForm';
import IngredientForm from './IngredientForm';
import DirectionsForm from './DirectionsForm';
import HomeContainer from './HomeContainer';
import IngredientListEdit from './IngredientListEdit';
import IngredientsList from './IngredientsList';

import { recipes, nutrition } from './data';

const store = createStore(reducer);

const RecipeTemporary = ({ id }) => {
  const recipe = store.getState().recipes.filter(recipe => recipe.id == id).pop();

  return <RecipePage recipe={recipe} />;
};

const App = () => (
  <Provider store={store}>
    <Router>
      <HomeContainer path="/" />
      <RecipeTemporary path="/recipe/:id" />
      <IngredientsList path="/ingredient-list" ingredients={recipes[0].ingredients} />
      <NutritionFactsPage path="/nutrition-facts/:id" nutrition={nutrition} />
      <RecipeForm path="/recipe-form" />
      <IngredientListEdit path="/ingredient-edit" />
      <IngredientForm path="/ingredient-form" />
      <DirectionsForm path="/directions-form" />
    </Router>
  </Provider>
);

export default App;
