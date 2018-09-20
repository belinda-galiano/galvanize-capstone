import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';


const RecipeCard = ({ name }) => (
  <div>
    <div className="my-card mdc-elevation--z2">
      <div className="text-card">
        <h6 className="mdc-typography--body1">{name}</h6>
        <p className="mdc-typography--body2 text-tags">tags</p>
        <i className="material-icons icon-size">
favorite_border
        </i>
      </div>
    </div>
  </div>
);
export default RecipeCard;

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
};
