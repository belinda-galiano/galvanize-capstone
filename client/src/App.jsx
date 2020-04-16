import React from 'react';
import { Router } from '@reach/router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import reducer from './reducer';
import RecipePageContainer from './RecipePageContainer';
import NutritionFactsContainer from './NutritionFactsContainer';
import RecipeFormContainer from './RecipeFormContainer';
import HomeContainer from './HomeContainer';
import MyRecipesContainer from './MyRecipesContainer';
import { getRecipes } from './api';
import WelcomePage from './WelcomePage';
import CreateAccountPage from './CreateAccountPage';

const store = createStore(reducer);
getRecipes(store);

const App = () => (
  <Provider store={store}>
    <Router>
      <WelcomePage path="/welcome-page" />
      <CreateAccountPage path="/create-account" />
      <HomeContainer path="/" />
      <MyRecipesContainer path="/my-recipes" />
      <RecipePageContainer path="/recipe/:id" />
      <NutritionFactsContainer path="/nutrition-facts/:id" />
      <RecipeFormContainer path="/recipe-form" />
    </Router>
  </Provider>
);

export default App;
