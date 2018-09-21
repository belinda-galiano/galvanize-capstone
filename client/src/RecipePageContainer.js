import { connect } from 'react-redux';
import RecipePage from 'RecipePage';

const mapDispatchToProps = dispatch => ({
  toggleFavorite: recipeId => dispatch({
    type: 'TOGGLE_FAVORITE',
    payload: {
      recipeId,
    },
  }),
});

export default connect(null, mapDispatchToProps)(RecipePage);
