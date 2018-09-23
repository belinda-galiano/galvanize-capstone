import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';

const mapDispatchToProps = dispatch => ({
  // i dispatch acctions
  // saveRecipe is my prop for the component
  saveRecipe: recipe => dispatch({
    // action for my reducer
    type: 'RECIPE_CREATE',
    payload: recipe,
  }),
});

export default connect(null, mapDispatchToProps)(RecipeForm);
