import { connect } from 'react-redux';
import HomePage from './HomePage';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    recipes: state.recipes || [],
  };
};

export default connect(mapStateToProps)(HomePage);
// the props of Homepage are the key of the object that mapStateTo props return
