import React from 'react';

const IngredientsList = ({ ingredients }) => {
  const list = ingredients
    .map(ingredient => (
      <li className="mdc-list-item">
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__primary-text">
            {ingredient.food}
            {ingredient.quantity}
          </span>
          <span className="mdc-list-item__secondary-text">{ingredient.notes}</span>
        </span>
      </li>
    ));

  return (
    <ul className="mdc-list mdc-list--two-line style-list" aria-orientation="vertical">
      {list}
    </ul>
  );
};

export default IngredientsList;
