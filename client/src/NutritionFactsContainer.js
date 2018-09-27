import { connect } from 'react-redux';
import NutritionFactsPage from './NutritionFactsPage';

const mapStateToProps = (state, ownProps) => ({
  nutrition: state.nutrition[ownProps.id % state.nutrition.length],
});

export default connect(mapStateToProps)(NutritionFactsPage);
