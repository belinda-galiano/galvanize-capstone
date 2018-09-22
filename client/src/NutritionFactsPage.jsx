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
              <td className="left">Per serving</td>
              <td className="right">100 g</td>
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
                <b>Caloties</b>
                &nbsp;200
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
                &nbsp;100g
              </td>
              <td className="right">154&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
              &nbsp;&nbsp;&nbsp;Saturated&nbsp;Fat
                &nbsp;15g
              </td>
              <td className="right">70&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                &nbsp;&nbsp;&nbsp;
                <i>Trans</i>
                &nbsp;Fat
                &nbsp;0g
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                <b>Sodium</b>
                &nbsp;2mg
              </td>
              <td className="right">0&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                <b>Total Carbohydrate</b>
                &nbsp;0g
              </td>
              <td className="right">0&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
              &nbsp;&nbsp;&nbsp;Dietary&nbsp;Fiber
                &nbsp;0g
              </td>
              <td className="right">0&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
              &nbsp;&nbsp;&nbsp;Sugars
              &nbsp;0g
              </td>
              <td className="right" />
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">
                <b>Protein</b>
                &nbsp;14g
              </td>
              <td className="right" />
            </tr>
            <tr>
              <td colSpan="2" className="second-divider" />
            </tr>
            <tr>
              <td className="left">Vitamin A</td>
              <td className="right">80&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Vitamin C</td>
              <td className="right">80&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Vitamin E</td>
              <td className="right">80&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Calcium</td>
              <td className="right">0&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Iron</td>
              <td className="right">0&nbsp;%</td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left">Potassium</td>
              <td className="right">0&nbsp;%</td>
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
