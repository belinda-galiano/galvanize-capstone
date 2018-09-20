import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';


const RecipeCard = ({ title, tags, image }) => (
  <div>
    <div className="my-card mdc-elevation--z2" style={image ? { backgroundImage: `url(${image})` } : null}>
      <div className="text-card">
        <h6 className="mdc-typography--body1">{title}</h6>
        <p className="mdc-typography--body2 text-tags">
          { tags.map(t => (
            <span style={{ marginLeft: '10px' }}>{t}</span>
          )) }

        </p>
        <i className="material-icons icon-size">
favorite_border
        </i>
      </div>
    </div>
  </div>
);
export default RecipeCard;

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
};
