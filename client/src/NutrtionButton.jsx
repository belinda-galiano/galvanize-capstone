import React from 'react';
import './NutrtionButton.css';
import infoIcon from './baseline-info-24px.svg';


const NutrtionButton = () => (
  <div>
    <div className="button-container align-elements">
      <img src={infoIcon} alt="information icon" />
      Nutrition
    </div>
  </div>
);
export default NutrtionButton;
