import React from 'react';
import './NutritionButton.css';
import infoIcon from './baseline-info-24px.svg';


const NutritionButton = () => (
  <div>
    <div className="button-container align-elements">
      <img src={infoIcon} alt="information icon" />
      Nutrition
    </div>
  </div>
);
export default NutritionButton;
