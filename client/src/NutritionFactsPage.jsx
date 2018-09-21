import React from 'react';
import './NutritionFactsPage.css';

import SecondaryHeader from './SecondaryHeader';

const NutritionFactsPage = ({ nutrition }) => (
  <div>
    <SecondaryHeader />
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="table-body">
        <h1>Nutrition Information</h1>
        <table className="nutrition-table">
          <tbody>
            <tr>
              <td className="nutrition-left-col">Per serving</td>
              <td />
            </tr>
            <tr>
              <td className="bold-fonts">Serving size</td>
              <td className="content-right ">
            1cup
                <span>(140gr)</span>
              </td>
            </tr>
            <tr>
              <td />
              <td>
%
                <span>Daily Value*</span>
              </td>
            </tr>
            <tr>
              <td>
            Total Fat
                <span className="qty">
                  {nutrition.fat.qty}
              g
                </span>
              </td>
              <td>
                {nutrition.fat.perc}
            %
              </td>
            </tr>
            <tr>
              <td>
            Cholesterol
                <span className="qty">
                  {nutrition.cholesterol.qty}
              g
                </span>
              </td>
              <td>
                {nutrition.cholesterol.perc}
            %
              </td>
            </tr>
            <tr>
              <td>
Vitamin D
                <span className="qty">
                  {nutrition['vitamin D'].qty}
mcg
                </span>
              </td>
              <td>
                {nutrition['vitamin D'].perc}
%
              </td>
            </tr>
            {/* <tr>
          <td className="main-divider-line" colSpan={2} />
        </tr> */}
            <tr>
              <td>
Vitamin C
                <span className="qty">
                  {nutrition['vitamin C'].qty}
mg
                </span>
              </td>
              <td>
                {nutrition['vitamin D'].perc}
%
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mdc-typography--caption">
* The % Daily Value tell you how much a nutrient in a serving of food contributes to a daily diet. 2000 calories a day is used for general nutrition advise
        </p>
      </div>
    </div>
  </div>
);

export default NutritionFactsPage;
