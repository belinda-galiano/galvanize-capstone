import React from 'react';
import './DirectionsForm.css';

import SecondaryHeader from './SecondaryHeader';
import Textarea from './Textarea';
import SaveBtn from './SaveBtn';

const DirectionsForm = () => (
  <div>
    <SecondaryHeader />
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="form-container">
        <p className="mdc-typography--body2 highlight-line">We recomend write the directions by steps</p>
        <Textarea name="Next step" />
        <div className="align-rigth">
          <SaveBtn name="Done" />
        </div>
      </div>
    </div>
  </div>
);
export default DirectionsForm;
