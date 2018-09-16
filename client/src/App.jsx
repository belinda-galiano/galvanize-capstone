import React, { Component } from 'react';
import './App.css';
import RecipePage from './RecipePage';
import SecondaryHeader from './SecondaryHeader';

class App extends Component {
  render() {
    return (
      <div>
        <SecondaryHeader />
        <RecipePage />
      </div>
    );
  }
}

export default App;
