import React from 'react';
import './IngredientListEdit.css';

const IngredientListEdit = ({ ingredient, ingredQty }) => (
  <div>
    <ul className="mdc-list mdc-list--two-line" aria-orientation="vertical">
      <li className="mdc-list-item mdc-list-item__meta">
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__primary-text mdc-typography--body1">
            {ingredient}
            {' '}
            {ingredQty}
mg
          </span>
          <span className="mdc-list-item__secondary-text mdc-typography--body2">Cut into small pieces</span>
        </span>
        <span className="mdc-list-item__meta material-icons" aria-hidden="true">delete_outline</span>
      </li>
      <li role="separator" className="mdc-list-divider" />
    </ul>
  </div>
);

export default IngredientListEdit;
