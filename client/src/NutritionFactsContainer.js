import { connect } from 'react-redux';
import NutritionFactsPage from './NutritionFactsPage';

const mapStateToProps = (state, ownProps) => ({
  nutrition: state.nutrition[ownProps.id % 2],
});

export default connect(mapStateToProps)(NutritionFactsPage);
