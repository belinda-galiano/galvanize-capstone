import React from 'react';
import PropTypes from 'prop-types';

import './RecipePage.css';
import NutritionButton from './NutritionButton';
import IngredientsList from './IngredientsList';
import DirectionsList from './DirectionsList';


import recipeImg from './Green Warrior Protein Smoothie.png';
import favoriteIcon from './baseline-favorite_border-24px.svg';
import editIcon from './baseline-edit-24px.svg';

const RecipePage = ({ recipe }) => {
  const servings = 1;


  return (
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="recipe-img-container">
        <img src={recipeImg} alt="Green Warrior Protein Smoothie" className="recipe-img" />
      </div>
      <div className="row-align flex-justify-content margin-between-8">
        <img src={favoriteIcon} alt="favorite icon" />
        <img src={editIcon} alt="edit icon" />
      </div>
      <h1 className="mdc-typography--headline5 tilte">{recipe.title}</h1>
      <p className="mdc-typography--subtitle2 p-tags">{recipe.tags}</p>
      <div className="row-align">
        <i className="material-icons">
timelapse
        </i>
        <p className="mdc-typography--subtitle1">
          Active
          {' '}
          {recipe.time.active}
        </p>
        <p className="mdc-typography--subtitle1">
          Total
          {' '}
          {recipe.time.total}
        </p>
      </div>
      <div className="divider-line margin-between-8" />
      <NutritionButton />
      <div className="divider-line margin-between-8" />
      <div className="row-align flex-justify-content">
        <h5 className="mdc-typography--subtitle2">Ingredients</h5>
        <div className="row-align">
          <h5 className="mdc-typography--subtitle2">servings</h5>
          <select name="servings" className="select-menu">
            <option value="first">{servings}</option>
            <option value="second" selected>{servings}</option>
          </select>
        </div>
      </div>
      <IngredientsList ingredients={recipe.ingredients} />
      <div className="divider-line " />
      <div>
        <h5 className="mdc-typography--subtitle2">Directions</h5>
        <DirectionsList directions={recipe.directions} />
        {' '}

      </div>

    </div>);
};

export default RecipePage;
