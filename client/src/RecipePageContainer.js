import { connect } from 'react-redux';
import RecipePage from './RecipePage';

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes[ownProps.id - 1],
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
