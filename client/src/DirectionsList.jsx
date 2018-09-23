import React from 'react';
import './DirectionsList.css';

const DirectionsList = ({ directions }) => {
  const steps = directions.map((direction, i) => <li key={i} className="mdc-typography--body1">{direction}</li>);
  return (
    <ul className="list-style">{steps}</ul>
  );
};
export default DirectionsList;
