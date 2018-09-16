import React, { Component } from 'react';
import './RecipePage.css';
import recipeImg from './Green Warrior Protein Smoothie.png';
import favoriteIcon from './baseline-favorite_border-24px.svg';
import editIcon from './baseline-edit-24px.svg';
import timeIcon from './baseline-timelapse-24px.svg';

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const recipe = {
      title: 'Green Smoothie',
      tags: ['#Vegan', ' #gluten-free', '#grain-free', '#no bake/raw', '#oil-free', '#refined sugar-free', '#soy-free'],
      time: {
        active: '0h 27min',
        total: '1h 40min',
      },
      ingredients: [['almond milk ', '1cup'], ['kale ', '1cup'], ['banana ', '1'], ['almond butter ', '1 tablespoon']],
      directions: [['Add all ingredients into a high-speed blender and blend until smooth'], ['Enjoy your super healthy smoothie!']],
    };

    const servings = 1;
    const listIngredient = recipe.ingredients
      .map(ingredient => <li>{ingredient}</li>);
    const directions = recipe.directions
      .map(direction => <li>{direction}</li>);

    return (
      <div className="mdc-top-app-bar--fixed-adjust">
        <img src={recipeImg} alt="Green Warrior Protein Smoothie" className="recipe-img" />
        <div className="row-align flex-justify-content">
          <img src={favoriteIcon} alt="favorite icon" />
          <img src={editIcon} alt="edit icon" />
        </div>
        <h2>{recipe.title}</h2>
        <p className="p-tags">{recipe.tags}</p>
        <div className="row-align">
          <img src={timeIcon} alt="timelapse icon" />
          <p>
            Active
            {' '}
            {recipe.time.active}
          </p>
          <p>
            Total
            {' '}
            {recipe.time.total}
          </p>
        </div>
        <div className="row-align flex-justify-content">
          <h3>Ingredients</h3>
          <div className="row-align">
            <h5>servings</h5>
            <select name="servings" className="select-menu">
              <option value="first">{servings}</option>
              <option value="second" selected>{servings}</option>
            </select>
          </div>
        </div>
        <ul className="style-list">
          {listIngredient}
        </ul>
        <div>
          <h3>Directions</h3>
          <ul>
            {directions}
          </ul>
        </div>

      </div>
    );
  }
}
export default RecipePage;
