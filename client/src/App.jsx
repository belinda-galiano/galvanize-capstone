import React, { Component } from 'react';
import './App.css';
import RecipePage from './RecipePage';
import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';

const recipe = {
  title: 'Green Smoothie',
  tags: ['#Vegan', ' #gluten-free', '#grain-free', '#no bake/raw', '#oil-free', '#refined sugar-free', '#soy-free'],
  time: {
    active: '0h 27min',
    total: '1h 40min',
  },
  ingredients: [{ food: 'almond milk ', quantity: '1cup', notes: 'or other non-dairy milk' }, { food: 'kale ', quantity: '1cup', notes: 'or baby spinach' }, { food: 'banana ', quantity: '1' }, { food: 'almond butter ', quantity: '1 tablespoon' }],

  directions: [['Add all ingredients into a high-speed blender and blend until smooth'], ['Enjoy your super healthy smoothie!']],

};

class App extends Component {
  render() {
    return (
      <div>
        <SecondaryHeader />
        <RecipePage recipe={recipe} />
        <Footer />
      </div>
    );
  }
}

export default App;
