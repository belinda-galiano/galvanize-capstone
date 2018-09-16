import React from 'react';
import './RecipePage.css';
import NutrtionButton from './NutrtionButton';
import IngredientsList from './IngredientsList';

import recipeImg from './Green Warrior Protein Smoothie.png';
import favoriteIcon from './baseline-favorite_border-24px.svg';
import editIcon from './baseline-edit-24px.svg';
import timeIcon from './baseline-timelapse-24px.svg';

const RecipePage = ({ recipe }) => {
  const servings = 1;
  const directions = recipe.directions
    .map(direction => <li className="mdc-typography--body1">{direction}</li>);

  return (
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="recipe-img-container">
        <img src={recipeImg} alt="Green Warrior Protein Smoothie" className="recipe-img" />
      </div>
      <div className="row-align flex-justify-content">
        <img src={favoriteIcon} alt="favorite icon" />
        <img src={editIcon} alt="edit icon" />
      </div>
      <h1 className="mdc-typography--headline5 tilte">{recipe.title}</h1>
      <p className="mdc-typography--subtitle2 p-tags">{recipe.tags}</p>
      <div className="row-align">
        <img src={timeIcon} alt="timelapse icon" />
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
      <div className="divider-line " />
      <NutrtionButton />
      <div className="divider-line " />
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
        <ul>
          {directions}
        </ul>
      </div>
    </div>);
};

export default RecipePage;
