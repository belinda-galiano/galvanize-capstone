import React from 'react';
import { Link } from '@reach/router';
import { PropTypes } from 'prop-types';
import './RecipePage.css';

import IngredientsList from './IngredientsList';
import DirectionsList from './DirectionsList';
import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';

const RecipePage = ({ recipe, toggleFavorite }) => {
  if (!recipe) {
    return <div>No recipe</div>;
  }

  const favorite = recipe.favorite ? 'favorite' : '';

  return (
    <div>
      <SecondaryHeader name="Recipe" />
      <div className="mdc-top-app-bar--fixed-adjust">
        <img src={recipe.image} alt="recipe" className="recipe-img" />
        <div className="recipe-page-container">
          <div className="row-align space-between-align ">
            <i onClick={event => toggleFavorite(recipe.id)} className={`material-icons ${favorite}`}>
              {recipe.favorite ? 'favorite' : 'favorite_border'}
            </i>
            <Link to="/recipe-form">
              <i className="material-icons">
                edit
              </i>
            </Link>
          </div>
          <h5 className="mdc-typography--headline5 tilte">{recipe.title}</h5>
          <p className="mdc-typography--subtitle2 p-tags">{recipe.tags}</p>
          <div className="divider-line margin-between-8" />
          <div className="row-align" style={{ justifyContent: 'flex-start' }}>
            <i className="material-icons">
              timelapse
            </i>
            <div style={{ paddingLeft: '16px' }}>
              <div className="mdc-typography--subtitle2" style={{ display: 'flex' }}>
                <div className="subtilte" style={{ width: '50px' }}>Active&nbsp;</div>
                <div>
                  &nbsp;
                  {Math.floor(recipe.time.active / 60)}
                  h
                  &nbsp;
                </div>
                <div>
                  &nbsp;
                  {recipe.time.active % 60}
                  min
                </div>
              </div>
              <div className="mdc-typography--subtitle2" style={{ display: 'flex' }}>
                <div className="subtilte" style={{ width: '50px' }}>Total&nbsp;</div>
                <div>
                  &nbsp;
                  {Math.floor(recipe.time.total / 60)}
                  h
                  &nbsp;
                </div>
                <div>
                  &nbsp;
                  {recipe.time.total % 60}
                  min
                </div>
              </div>
            </div>
          </div>
          <div className="divider-line margin-between-8" />
          <Link to={`/nutrition-facts/${recipe.id}`} className="mdc-button mdc-button--raised" onClick={() => window.scrollTo(0, 0)}>
            <i className="material-icons mdc-button__icon">info</i>
            Nutrition
          </Link>
          <div className="divider-line margin-between-8" />
          <label tabIndex={1} className="mdc-typography--subtitle1 subtilte">
            Servings
            <select>
              <option className="mdc-typography--body1">1</option>
              <option className="mdc-typography--body1">2</option>
              <option className="mdc-typography--body1">3</option>
            </select>
          </label>
          <div className="divider-line margin-between-8" />
          <IngredientsList ingredients={recipe.ingredients} />
          <div>
            <div className="divider-line " />
            <h5 className="mdc-typography--subtitle1 subtilte">Directions</h5>
            <DirectionsList directions={recipe.directions} />
            <div className="divider-line " />
            <h5 className="mdc-typography--subtitle1 subtilte">Notes</h5>
            <p className="mdc-typography--body1">
              {recipe.notes}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipePage;

RecipePage.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,

};
