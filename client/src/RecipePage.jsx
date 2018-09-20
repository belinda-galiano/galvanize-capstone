import React from 'react';
import { Link } from '@reach/router';
import './RecipePage.css';

import IngredientsList from './IngredientsList';
import DirectionsList from './DirectionsList';
import SecondaryHeader from './SecondaryHeader';

const RecipePage = ({ recipe }) => (
  <div>
    <SecondaryHeader />
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="recipe-img-container">
        <img src={recipe.image} alt="Green Warrior Protein Smoothie" className="recipe-img" />
      </div>
      <div className="recipe-page-container">
        <div className="row-align space-between-align ">
          <i className="material-icons">
            favorite_border
          </i>
          <i className="material-icons">
            edit
          </i>
        </div>
        <h5 className="mdc-typography--headline5 tilte">{recipe.title}</h5>
        <p className="mdc-typography--subtitle2 p-tags" style={{ marginLeft: '8px' }}>{recipe.tags}</p>
        <div className="row-align">
          <i className="material-icons">
            timelapse
          </i>
          <p className="mdc-typography--subtitle2">
            Active
            {recipe.time.active}
          </p>
          <p className="mdc-typography--subtitle2">
            Total
            {recipe.time.total}
          </p>
        </div>
        <div className="divider-line margin-between-8" />
        <Link to={`/nutrition-facts/${recipe.id}`} className="mdc-button mdc-button--raised">
          <i className="material-icons mdc-button__icon">info</i>
          Nutrition
        </Link>
        <div className="divider-line margin-between-8" />
        <div className="row-align space-between-align">
          <h5 className="mdc-typography--subtitle1">Ingredients</h5>
          <div className="row-align">
            <h5 className="mdc-typography--subtitle1">servings</h5>
            <div className="serv-menu-position">
              <div className="mdc-select mdc-select--outlined serving-cell">
                <select className="mdc-select__native-control" />
                <label className="mdc-floating-label mdc-typography--body2">{recipe.servings}</label>
                <div className="mdc-notched-outline">
                  <svg>
                    <path className="mdc-notched-outline__path" />
                  </svg>
                </div>
                <div className="mdc-notched-outline__idle" />
              </div>
            </div>

          </div>
        </div>
        <IngredientsList ingredients={recipe.ingredients} />
        <div>
          <div className="divider-line " />
          <h5 className="mdc-typography--subtitle1">Directions</h5>
          <DirectionsList directions={recipe.directions} />
          {' '}
          <div className="divider-line " />
          <h5 className="mdc-typography--subtitle1">Notes</h5>
          <p>
            {recipe.notes}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default RecipePage;
