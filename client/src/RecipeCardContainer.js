import { connect } from 'react-redux';
import RecipeCard from './RecipeCard';

// I going to create a prop inside this function that is going to be pass
// to my component 'RecipeCard like a prop, and in this cases
// when is click in going to trigger
const mapDispatchToProps = dispatch => ({
  toggleFavorite: recipeId => dispatch({
    type: 'TOGGLE_FAVORITE',
    payload: {
      recipeId,
    },
  }),
});

export default connect(null, mapDispatchToProps)(RecipeCard);
