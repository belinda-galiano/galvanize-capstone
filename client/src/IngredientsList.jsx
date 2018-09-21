import React from 'react';
import PropTypes from 'prop-types';
import './IngredientsList.css';

const IngredientsList = ({ ingredients }) => {
  const list = ingredients
    .map(ingredient => (
      <div>
        <li className="mdc-list-item">
          <span className="mdc-list-item__text">
            <span className="mdc-list-item__primary-text mdc-typography--body1">
              {ingredient.food}
              {''}
              {ingredient.qty}
mg
            </span>
            <span className="mdc-list-item__secondary-text mdc-typography--body2">{ingredient.notes}</span>
          </span>
        </li>
      </div>
    ));

  return (
    <div>
      <ul className="mdc-list mdc-list--two-line">
        {list}
      </ul>
    </div>
  );
};

export default IngredientsList;

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};
