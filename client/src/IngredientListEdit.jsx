import React from 'react';
import PropTypes from 'prop-types';
import './IngredientListEdit.css';

const IngredientListEdit = ({ ingredients }) => (
  <div>
    <ul className="mdc-list mdc-list--two-line">
      {ingredients.map(ingredient => (
        <li key={ingredient.name} className="mdc-list-item">
          <span className="mdc-list-item__text">
            <span className="mdc-list-item__primary-text mdc-typography--body1">
              {ingredient.name}
              {' '}
              {ingredient.qty}
            </span>
            <span className="mdc-list-item__secondary-text mdc-typography--body2">{ingredient.note}</span>
          </span>
          <span className="mdc-list-item__meta material-icons" aria-hidden="true">delete_outline</span>
        </li>
      ))}
      <li role="separator" className="mdc-list-divider" />
    </ul>
  </div>
);

export default IngredientListEdit;

IngredientListEdit.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};
