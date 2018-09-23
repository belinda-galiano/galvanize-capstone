import { connect } from 'react-redux';
import RecipePage from './RecipePage';

const findRecipe = (recipes, id) => recipes.filter(r => r.id == id).pop();

const mapStateToProps = (state, ownProps) => ({
  recipe: findRecipe(state.recipes, ownProps.id),
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: recipeId => dispatch({
    type: 'TOGGLE_FAVORITE',
    payload: {
      recipeId,
    },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
