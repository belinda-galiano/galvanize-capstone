import React from 'react';
import './DirectionsList.css';

const DirectionsList = ({ directions }) => {
  const steps = directions.map((direction, i) => <li key={i}>{direction}</li>);
  return (
    <ul className="list-style mdc-typography--body1">{steps}</ul>
  );
};
export default DirectionsList;
