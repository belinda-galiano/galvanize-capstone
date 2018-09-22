import React from 'react';
import './DirectionsForm.css';

import SecondaryHeader from './SecondaryHeader';
import Textarea from './Textarea';
import BtnSave from './BtnSave';

const DirectionsForm = () => (
  <div>
    <SecondaryHeader name="Add Direction" />
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="form-container">
        <p className="mdc-typography--body2 highlight-line">We recomend write the directions by steps</p>
        <Textarea name="Next step" />
        <div className="align-right">
          <BtnSave name="Done" />
        </div>
      </div>
    </div>
  </div>
);
export default DirectionsForm;
