import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';
import { navigate } from '@reach/router';

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickFav = this.handleClickFav.bind(this);

    this.state = { favorite: false };
  }

  handleClick() {
    navigate(`/recipe/${this.props.id}`);
  }

  handleClickFav(event) {
    event.stopPropagation();
    // TODO: Save as a favorite
    alert('Not saving favorites yet.');
  }

  render() {
    const { title, tags, image } = this.props;

    return (
      <div onClick={this.handleClick}>
        <div className="my-card mdc-elevation--z2" style={image ? { backgroundImage: `url(${image})` } : null}>
          <div className="text-card">
            <div className="text-padding">
              <h6 className="mdc-typography--headline6">{title}</h6>
              <p className="mdc-typography--body2 text-tags">
                {tags.map(t => (
                  <span style={{ marginLeft: '8px' }}>{t}</span>
                ))}
              </p>
              <i onClick={this.handleClickFav} className="material-icons icon-size">
                favorite_border
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
  tags: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
