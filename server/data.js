module.exports.dataNutrition = [{
  servingSize: 3,
  calories: 300,
  totalFat: {
    qty: 8,
    perc: 10,
    saturatedFat: { qty: 4, perc: 11 },
    transFat: { qty: 6, perc: null },
  },
  cholesterol: { qty: 1, perc: 2 },
  sodium: { qty: 2, perc: 4 },
  totalCarbohydrate: {
    qty: 12,
    perc: 13,
    dietaryFiber: { qty: 5, perc: 7 },
    sugars: { qty: 2, perc: 3 },
  },
  protein: { qty: 3, perc: null },
  vitaminA: { perc: 1 },
  vitaminB: { perc: 2 },
  vitaminC: { perc: 3 },
  vitaminD: { perc: 4 },
  vitaminE: { perc: 5 },
  calcium: { perc: 6 },
  iron: { perc: 7 },
  potassium: { perc: 8 },
}];

module.exports.ingredients = [
  [
    { name: 'almond milk ', qty: '1cup', note: 'or other non-dairy milk' },
    { name: 'kale ', qty: '1cup', note: 'or baby spinach' },
    { name: 'banana ', qty: '1', note: '' },
    { name: 'almond butter ', qty: '1 tablespoon', note: '' }
  ],
  [
    { name: 'carrots ', qty: '230g(8 ounces) ', note: 'scrubbed and trimmed ' },
    { name: 'olive oil ', qty: '3 1/2 tablespoons', note: '' },
    { name: 'sea salt ', qty: '', note: '' }, { name: 'black pepper ', qty: '', note: 'freshly ground' },
    { name: 'can white beans ', qty: '1 15-oz (425g)', note: 'such as cannelloni or great northern, rinsed' },
    { name: 'garlic', qty: '1 clove', note: 'peeled' },
    { name: 'lemon juice', qty: '1 tablespoon', note: '' },
    { name: 'Celery stalks', qty: '', note: 'for serving' },
    { name: 'pita chips', qty: '', note: 'for serving' },
  ],
  [
    { name: 'can cannelinni beans', qty: '1 15 oz', note: 'Great Northern would work as well, drained and rinsed' },
    { name: 'red beet', qty: '1 small', note: 'roasted and cut into small pieces' },
    { name: 'tahini', qty: '1/4 cup', note: '' },
    { name: 'maple syrup', qty: '1/2 tsp', note: '' },
    { name: 'salt', qty: '', note: '' },
    { name: 'pepper', qty: '', note: '' },
    { name: 'olive oil', qty: '1 Tbsp', note: '' },
    { name: 'hazelnut oil', qty: '1 tsp', note: '' },
    { name: 'rosemary', qty: '1 spring', note: 'finely chopped' },
  ],
];

module.exports.recipes = [
  {
    image: '/Green-Warrior-Protein-Smoothie.png',
    title: 'Green Smoothie',
    active_time: 27,
    total_time: 100,
    directions: ['Add all ingredients into a high-speed blender and blend until smooth', 'Enjoy your super healthy smoothie!'].join('|||'),
    tags: ['#Vegan', ' #gluten-free', '#grain-free', '#no bake/raw', '#oil-free', '#refined sugar-free', '#soy-free'].join('|||'),
    notes: 'Taken from https://ohsheglows.com/2011/01/13/classic-green-monster/',
  },
  {
    title: 'Roasted Carrot and White Bean Dip',
    image: '/Roasted-Carrot-and-White-Bean-Dip.png',
    tags: ['#Vegan', ' #gluten-free', '#carrots', '#refined sugar-free', '#soy-free'].join('|||'),
    active_time: 4,
    total_time: 24,
    directions: [
      'Preheat the oven to 375F (190C).',
      'Place the carrots in a baking dish; add 1/2 tbsp of the olive oil, 1/8 teaspoon salt, and 1/8 teaspoon black pepper, and toss to coat.',
      'Roast until a knife can easily slice through the center of each carrot, about 20 minutes.',
      'Remove from the oven and let cool slightly.',
      'In a food processor, combine the roasted carrots, white beans, garlic and lemon juice and process for about 30 seconds.',
      'With the processor running, slowly pour in the remaining 3 tbsp olive oil and process until smooth, scraping down the sides as needed, about 3 minutes.',
      'Season with salt and pepper, transfer to a resealable container, and refrigerate for at least 2 hours before serving.',
      'Serve the dip with celery and pita chips.'].join('|||'),
    notes: 'Taken from https://willfrolicforfood.com/2017/07/roasted-carrot-and-white-bean-dip-from-vegetarian-heartland.html',
  },
  {
    title: 'Roasted Beet Hummus with Hazelnut Oil & Rosemary',
    image: '/Roasted-Beet-Hummus.png',
    tags: ['#beans', '#beet', 'tahini'].join('|||'),
    active_time: 10,
    total_time: 10,
    directions: [
      'Using a name processor fitted with an S-blade, combine beans, beet pieces, tahini, maple syrup, lemon juice, salt, and pepper and process until completely smooth, 3 to 5 minutes. Season with more salt, if needed.',
      'Transfer to a serving bowl, drizzle olive oil and hazelnut over it and then sprinkle with rosemary. Serve with fresh bread, crackers, or veggies.'].join('|||'),
    notes: 'This Roasted Beet Hummus with Hazelnut Oil & Rosemary recipe is a bright snack worthy of serving to guests but simple enough to enjoy with weekday meals.    Taken from https://www.vegetarianventures.com/roasted-beet-hummus-with-hazelnut-oil-rosemary/',
  }
];