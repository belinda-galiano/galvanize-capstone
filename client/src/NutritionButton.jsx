import React from 'react';
import './NutritionButton.css';
import infoIcon from './baseline-info-24px.svg';


const NutritionButton = () => (
  <div>
    {/* //   <div className="button-container align-elements">
  //     <img src={infoIcon} alt="information icon" />
  //     Nutrition
  //   </div> */}
    <button className="mdc-button mdc-button--raised mdc-button__icon mdc-button-container-fill-color">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="white" />
      </svg>
      Nutrition
    </button>
  </div>

);
export default NutritionButton;
