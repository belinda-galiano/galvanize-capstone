import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';
import { navigate } from '@reach/router';

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickFav = this.handleClickFav.bind(this);
  }

  handleClick() {
    navigate(`/recipe/${this.props.id}`);
  }

  handleClickFav(event) {
    // stopPropagation so that it does not navigate to recipe page.
    event.stopPropagation();

    const { toggleFavorite, id } = this.props;
    toggleFavorite(id);
  }

  render() {
    const {
      title, tags, image, favorite,
    } = this.props;

    return (
      <div onClick={this.handleClick}>
        <div className="my-card mdc-elevation--z2" style={image ? { backgroundImage: `url(${image})` } : null}>
          <div className="text-card">
            <div className="text-padding">
              <h6 className="mdc-typography--headline6">{title}</h6>
              <p className="mdc-typography--body2 text-tags">
                {tags.map(t => (
                  <span key={t} style={{ marginLeft: '8px' }}>{t}</span>
                ))}
              </p>
              <i onClick={this.handleClickFav} className="material-icons icon-size">
                { favorite ? 'favorite' : 'favorite_border' }
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeCard;

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.bool,
};

RecipeCard.defaultProps = {
  favorite: false,
};
