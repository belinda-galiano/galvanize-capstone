import { connect } from 'react-redux';
import MyRecipes from './MyRecipes';

const mapStateToProps = (state) => {
  const recipes = state.recipes || [];

  return {
    recipes: recipes.filter(recipe => recipe.favorite),
  };
};


export default connect(mapStateToProps)(MyRecipes);
