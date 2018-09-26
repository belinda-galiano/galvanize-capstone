import React from 'react';
import PropTypes from 'prop-types';
import './IngredientsList.css';

const IngredientsList = ({ ingredients }) => {
  const list = ingredients
    .map((ingredient, i) => (
      <li key={i} className="mdc-list-item">
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__primary-text mdc-typography--body1" style={{ color: '#000000' }}>
            {ingredient.name}
            {''}
            {ingredient.qty}
          </span>
          <span className="mdc-list-item__secondary-text mdc-typography--body2">{ingredient.note}</span>
        </span>
      </li>
    ));

  return (
    <div>
      <div style={{ marginTop: '16px', fontWeight: 'bold' }} className="mdc-typography--subtitle1">Ingredients</div>
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
