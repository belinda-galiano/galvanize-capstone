import React from 'react';

const NutritionFactsPage = ({ nutrition }) => (
  <div>
    <h1>Nutrition Information</h1>
    <div className="divider-line" />
    <p>Per serving</p>
    <table>
      <tbody>
        <tr>
          <td>
            Total Fat
            <span>
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
            <span>
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
          <td>Vitamin D</td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>
);

export default NutritionFactsPage;
