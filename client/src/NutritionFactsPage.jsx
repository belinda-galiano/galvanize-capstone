import React from 'react';
import './NutritionFactsPage.css';
import BarChart from './BarChart';
import SecondaryHeader from './SecondaryHeader';

const nutrition = {
  servingSize: '30g',
  calories: 300,
  totalFat: {
    qty: 8,
    perc: 10,
    saturatedFat: { qty: 4, perc: 11 },
    transFat: { qty: 6, perc: null },
  },
  cholesterol: { qty: 1, perc: 2 },
  sodium: { qty: 2, perc: 4 },
  totalCarbohydrate: {
    qty: 12,
    perc: 13,
    dietaryFiber: { qty: 5, perc: 7 },
    sugars: { qty: 2, perc: 3 },
  },
  protein: { qty: 3, perc: null },
  vitaminA: { perc: 1 },
  vitaminB: { perc: 2 },
  vitaminC: { perc: 3 },
  vitaminD: { perc: 4 },
  vitaminE: { perc: 5 },
  calcium: { perc: 6 },
  iron: { perc: 7 },
  potassium: { perc: 8 },
};

const NutritionFactsPage = ({ id /* nutrition */ }) => (
  <div>
    <SecondaryHeader name="Nutrition Facts" backTo={`/recipe/${id}`} />
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="page-container">
        <BarChart />
        <table className="nutrition-table center" style={{ marginTop: '16px' }}>
          <tbody>
            {/* <tr colSpan="2">
              <td className="center mdc-typography--headline4"><strong>Nutrition Facts</strong></td>
            </tr> */}
            <tr>
              <td className="left">Serving Size</td>
              <td className="right">{nutrition.servingSize}</td>
            </tr>
            <tr>
              <td colSpan="2" className="main-divider" style={{ backgroundColor: '#558B2F' }} />
            </tr>
            <tr>
              <td colSpan="2" className="left"><b>Amount Per Serving</b></td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">
                <b>Calories</b>
                &nbsp;
                {nutrition.calories}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="third-divider" style={{ backgroundColor: '#558B2F' }} />
            </tr>
            <tr>
              <td colSpan="2" className="right mdc-typography--body1">
                <b>% Daily Value</b>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">
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
              <td className="left mdc-typography--body1">
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
              <td className="left mdc-typography--body1">
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
              <td className="left mdc-typography--body1">
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
              <td className="left mdc-typography--body1">
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
              <td className="left mdc-typography--body1">
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
              <td className="left mdc-typography--body1">
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
              <td className="left mdc-typography--body1">
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
              <td className="left mdc-typography--body1">
                <b>Protein</b>
                &nbsp;
                {nutrition.protein.qty}
                g
              </td>
              <td className="right" />
            </tr>
            <tr>
              <td colSpan="2" className="second-divider" style={{ backgroundColor: '#558B2F' }} />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">Vitamin A</td>
              <td className="right">
                {nutrition.vitaminA.perc}
                &nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">Vitamin B</td>
              <td className="right">
                {nutrition.vitaminB.perc}
                &nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">Vitamin C</td>
              <td className="right">
                {nutrition.vitaminC.perc}
                &nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">Vitamin D</td>
              <td className="right">
                {nutrition.vitaminD.perc}
                &nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">Vitamin E</td>
              <td className="right">
                {nutrition.vitaminE.perc}
                &nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">Calcium</td>
              <td className="right">
                {nutrition.calcium.perc}
                &nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">Iron</td>
              <td className="right">
                {nutrition.iron.qty}
                &nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td className="left mdc-typography--body1">Potassium</td>
              <td className="right">
                {nutrition.potassium.perc}
                &nbsp;%
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="divider" />
            </tr>
            <tr>
              <td colSpan="2" className="mdc-typography--caption" style={{ marginBottom: '16px' }}>Percent Daily Values are based on a 2,000 calorie diet.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>

);

export default NutritionFactsPage;
