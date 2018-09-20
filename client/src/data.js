export const nutrition = {
  fat: { qty: 8, perc: 10 },
  cholesterol: { qty: 0, perc: 0 },
  protein: { qty: 0, perc: null },
  'vitamin D': { qty: 5, perc: 25 },
  'vitamin C': { qty: 20, perc: 2 },
};

export const recipes = [{
  image: '/Green-Warrior-Protein-Smoothie.png',
  title: 'Green Smoothie',
  tags: ['#Vegan', ' #gluten-free', '#grain-free', '#no bake/raw', '#oil-free', '#refined sugar-free', '#soy-free'],
  time: {
    active: [0, 27],
    total: [1, 40],
  },
  servings: 1,
  ingredients: [{ food: 'almond milk ', qty: '1cup', notes: 'or other non-dairy milk' }, { food: 'kale ', qty: '1cup', notes: 'or baby spinach' }, { food: 'banana ', qty: '1', notes: '' }, { food: 'almond butter ', qty: '1 tablespoon', notes: '' }],
  directions: ['Add all ingredients into a high-speed blender and blend until smooth', 'Enjoy your super healthy smoothie!'],
  notes: ['Taken from https://ohsheglows.com/2011/01/13/classic-green-monster/'],
},
{
  title: 'Roasted Carrot and White Bean Dip',
  image: '/Roasted-Carrot-and-White-Bean-Dip.png',
  tags: ['#Vegan', ' #gluten-free', '#carrots', '#refined sugar-free', '#soy-free'],
  time: {
    active: [0, 4],
    total: [0, 24],
  },
  servings: 4,
  ingredients: [
    { food: 'carrots ', qty: '230g(8 ounces) ', notes: 'scrubbed and trimmed ' },
    { food: 'olive oil ', qty: '3 1/2 tablespoons', notes: '' },
    { food: 'sea salt ', qty: '', notes: '' }, { food: 'black pepper ', qty: '', notes: 'freshly ground' },
    { food: 'can white beans ', qty: '1 15-oz (425g)', notes: 'such as cannelloni or great northern, rinsed' },
    { food: 'garlic', qty: '1 clove', notes: 'peeled' },
    { food: 'lemon juice', qty: '1 tablespoon', notes: '' },
    { food: 'Celery stalks', qty: '', notes: 'for serving' },
    { food: 'pita chips', qty: '', notes: 'for serving' },
  ],
  directions: [
    'Preheat the oven to 375F (190C).',
    'Place the carrots in a baking dish; add 1/2 tbsp of the olive oil, 1/8 teaspoon salt, and 1/8 teaspoon black pepper, and toss to coat.',
    'Roast until a knife can easily slice through the center of each carrot, about 20 minutes.',
    'Remove from the oven and let cool slightly.',
    'In a food processor, combine the roasted carrots, white beans, garlic and lemon juice and process for about 30 seconds.',
    'With the processor running, slowly pour in the remaining 3 tbsp olive oil and process until smooth, scraping down the sides as needed, about 3 minutes.',
    'Season with salt and pepper, transfer to a resealable container, and refrigerate for at least 2 hours before serving.',
    'Serve the dip with celery and pita chips.'],

  notes: ['Taken from https://willfrolicforfood.com/2017/07/roasted-carrot-and-white-bean-dip-from-vegetarian-heartland.html'],
},
{
  title: 'Roasted Beet Hummus with Hazelnut Oil & Rosemary',
  image: '/Roasted-Beet-Hummus.png',
  tags: ['#beans', '#beet', 'tahini'],
  time: {
    active: [0, 10],
    total: [0, 10],
  },
  servings: 6,
  ingredients: [
    { food: 'can cannelinni beans', qty: '1 15 oz', notes: 'Great Northern would work as well, drained and rinsed' },
    { food: 'red beet', qty: '1 small', notes: 'roasted and cut into small pieces' },
    { food: 'tahini', qty: '1/4 cup', notes: '' },
    { food: 'maple syrup', qty: '1/2 tsp', notes: '' },
    { food: 'salt', qty: '', notes: '' },
    { food: 'pepper', qty: '', notes: '' },
    { food: 'olive oil', qty: '1 Tbsp', notes: '' },
    { food: 'hazelnut oil', qty: '1 tsp', notes: '' },
    { food: 'rosemary', qty: '1 spring', notes: 'finely chopped' },
  ],
  directions: [
    'Using a food processor fitted with an S-blade, combine beans, beet pieces, tahini, maple syrup, lemon juice, salt, and pepper and process until completely smooth, 3 to 5 minutes. Season with more salt, if needed.',
    'Transfer to a serving bowl, drizzle olive oil and hazelnut over it and then sprinkle with rosemary. Serve with fresh bread, crackers, or veggies.'],
  notes: [
    'This Roasted Beet Hummus with Hazelnut Oil & Rosemary recipe is a bright snack worthy of serving to guests but simple enough to enjoy with weekday meals.',
    'Taken from https://www.vegetarianventures.com/roasted-beet-hummus-with-hazelnut-oil-rosemary/',
  ],

},
];
