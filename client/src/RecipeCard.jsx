import React from 'react';
import './RecipeCard.css';

const RecipeCard = () => (
  <div>
    <div className="mdc-card my-card">
      <div className="mdc-card__media my-card__media mdc-card__media--square" />
      <h5>Hola</h5>
      <p>hi</p>
      <div className="mdc-card__actions">
        <div className="mdc-card__action-buttons">
          <button className="mdc-button mdc-card__action mdc-card__action--button">Action 1</button>
          <button className="mdc-button mdc-card__action mdc-card__action--button">Action 2</button>
        </div>
        <div className="mdc-card__action-icons">
          <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
          <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
        </div>
      </div>
    </div>
  </div>
);
export default RecipeCard;
