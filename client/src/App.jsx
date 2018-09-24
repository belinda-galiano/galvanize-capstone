import React from 'react';
import { Router } from '@reach/router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import reducer from './reducer';
import RecipePageContainer from './RecipePageContainer';
// import NutritionFactsPage from './NutritionFactsPage';
import RecipeFormContainer from './RecipeFormContainer';
import HomeContainer from './HomeContainer';
import MyRecipesContainer from './MyRecipesContainer';
import { getRecipes } from './api';

const store = createStore(reducer);
getRecipes(store);

const App = () => (
  <Provider store={store}>
    <Router>
      <HomeContainer path="/" />
      <MyRecipesContainer path="/my-recipes" />
      <RecipePageContainer path="/recipe/:id" />
      {/* <NutritionFactsPage path="/nutrition-facts/:id" nutrition={dataNutrition[0]} /> */}
      <RecipeFormContainer path="/recipe-form" />
    </Router>
  </Provider>
);

export default App;
