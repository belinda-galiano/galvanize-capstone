import React, { Component } from 'react';
import './App.css';
import RecipePage from './RecipePage';
import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <SecondaryHeader />
        <RecipePage />
        <Footer />
      </div>
    );
  }
}

export default App;
