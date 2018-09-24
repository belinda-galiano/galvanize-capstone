import React from 'react';
import { Link } from '@reach/router';
import { PropTypes } from 'prop-types';
import './RecipePage.css';

import IngredientsList from './IngredientsList';
import DirectionsList from './DirectionsList';
import SecondaryHeader from './SecondaryHeader';

const RecipePage = ({ recipe, toggleFavorite }) => {
  if (!recipe) {
    return <div>No recipe</div>;
  }

  return (
    <div>
      <SecondaryHeader name="Recipe" />
      <div className="mdc-top-app-bar--fixed-adjust">
        <img src={recipe.image} alt="recipe" className="recipe-img" />
        <div className="recipe-page-container">
          <div className="row-align space-between-align ">
            <i onClick={event => toggleFavorite(recipe.id)} className="material-icons">
              {recipe.favorite ? 'favorite' : 'favorite_border'}
            </i>
            <Link to="/recipe-form">
              <i className="material-icons">
                edit
              </i>
            </Link>
          </div>
          <h5 className="mdc-typography--headline5 tilte">{recipe.title}</h5>
          <p className="mdc-typography--subtitle2 p-tags" style={{ marginLeft: '8px' }}>{recipe.tags}</p>
          <div className="row-align">
            <i className="material-icons">
              timelapse
            </i>
            <div className="mdc-typography--subtitle2">
              <div>Active</div>
              <div>
                {Math.floor(recipe.time.active / 60)}
                {' '}
                hours
              </div>
              <div>
                {recipe.time.active % 60}
                {' '}
              minutes
              </div>
            </div>
            <div className="mdc-typography--subtitle2">
              <div>Total</div>
              <div>
                {Math.floor(recipe.time.total / 60)}
                {' '}
                hours
              </div>
              <div>
                {recipe.time.total % 60}
                {' '}
              minutes
              </div>
            </div>
          </div>
          <div className="divider-line margin-between-8" />
          <Link to={`/nutrition-facts/${recipe.id}`} className="mdc-button mdc-button--raised">
            <i className="material-icons mdc-button__icon">info</i>
            Nutrition
          </Link>
          <div className="divider-line margin-between-8" />

          <label tabIndex={1} className="mdc-typography--subtitle1">
            Servings
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
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
    </div>);
};

export default RecipePage;

RecipePage.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,

};
