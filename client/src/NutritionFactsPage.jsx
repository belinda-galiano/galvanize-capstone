import React from 'react';
import './NutritionFactsPage.css';

import SecondaryHeader from './SecondaryHeader';

const NutritionFactsPage = ({ nutrition }) => (
  <div>
    <SecondaryHeader />
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="page-container">
        <table className="nutrition-table center">
          <tbody>
            <tr colSpan="2">
              <td className="center">Nutrition Information</td>
            </tr>
            <tr>
              <td className="left">Serving Size</td>
              <td className="right">{nutrition.servingSize}</td>
            </tr>
            <tr>
              <td colSpan="2" className="main-divider" />
            </tr>
            <tr>
              <td colSpan="2" className="left"><b>Amount Per Serving</b></td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                <b>Calories</b>
                &nbsp;
                {nutrition.calories}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="third-divider" />
            </tr>
            <tr>
              <td colSpan="2" className="right">
                <b>% Daily Value</b>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                <b>Total&nbsp;Fat</b>
                &nbsp;
                {nutrition.totalFat.qty}
g
              </td>
              <td className="right">
                {nutrition.totalFat.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
              &nbsp;&nbsp;&nbsp;Saturated&nbsp;Fat
                &nbsp;
                {nutrition.totalFat.saturatedFat.qty}
g
              </td>
              <td className="right">
                {nutrition.totalFat.saturatedFat.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                &nbsp;&nbsp;&nbsp;
                <i>Trans</i>
                &nbsp;Fat
                &nbsp;
                {nutrition.totalFat.transFat.qty}
g
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                <b>Cholesterol</b>
                &nbsp;
                {nutrition.cholesterol.qty}
mg
              </td>
              <td className="right">
                {nutrition.cholesterol.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                <b>Sodium</b>
                &nbsp;
                {nutrition.sodium.qty}
mg
              </td>
              <td className="right">
                {nutrition.sodium.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                <b>Total Carbohydrate</b>
                &nbsp;
                {nutrition.totalCarbohydrate.qty}
g
              </td>
              <td className="right">
                {nutrition.totalCarbohydrate.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
              &nbsp;&nbsp;&nbsp;Dietary&nbsp;Fiber
                &nbsp;
                {nutrition.totalCarbohydrate.dietaryFiber.qty}
g
              </td>
              <td className="right">
                {nutrition.totalCarbohydrate.dietaryFiber.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
              &nbsp;&nbsp;&nbsp;Sugars

                {nutrition.totalCarbohydrate.sugars.qty}
g
              </td>
              <td className="right" />
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                <b>Protein</b>
                &nbsp;
                {nutrition.protein.qty}
g
              </td>
              <td className="right" />
            </tr>
            <tr>
              <td colSpan="2" className="second-divider" />
            </tr>
            <tr>
              <td className="left">Vitamin A</td>
              <td className="right">
                {nutrition.vitaminA.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Vitamin B</td>
              <td className="right">
                {nutrition.vitaminB.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Vitamin C</td>
              <td className="right">
                {nutrition.vitaminC.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Vitamin D</td>
              <td className="right">
                {nutrition.vitaminD.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Vitamin E</td>
              <td className="right">
                {nutrition.vitaminE.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Calcium</td>
              <td className="right">
                {nutrition.calcium.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Iron</td>
              <td className="right">
                {nutrition.iron.qty}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Potassium</td>
              <td className="right">
                {nutrition.potassium.perc}
&nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td colSpan="2">Percent Daily Values are based on a 2,000 calorie diet.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

);

export default NutritionFactsPage;
