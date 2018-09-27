module.exports.dataNutrition = [];

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
  [
    { name: 'dragon fruit', qty: '200 g', note: 'frozen,unsweetened' },
    { name: 'raspberries', qty: '1/2 cup', note: 'or other fruit' },
    { name: 'bananas', qty: '100 g', note: 'peeled, sliced, and frozen' },
    { name: 'Vegan Vanilla Protein Powder ', qty: '1 tsp', note: '' },
    { name: 'dairy-free milk', qty: '1/2 cup', note: '' },
  ],
];

module.exports.recipes = [
  {
    image: '/Green_Warrior_Protein_Smoothie.png',
    title: 'Green Smoothie',
    active_time: 27,
    total_time: 100,
    directions: ['Add all ingredients into a high-speed blender and blend until smooth', 'Enjoy your super healthy smoothie!'].join('|||'),
    tags: ['#Vegan', ' #gluten-free', '#grain-free', '#no bake/raw', '#oil-free', '#refined sugar-free', '#soy-free'].join('|||'),
    notes: 'Taken from https://ohsheglows.com/2011/01/13/classic-green-monster/',
  },
  {
    title: 'Roasted Carrot and White Bean Dip',
    image: '/Roasted_Carrot_and_White_Bean_Dip.png',
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
    image: '/Roasted_Beet_Hummus_with_Hazelnut_Oil_&_Rosemary.png',
    tags: ['#beans', '#beet', '#tahini'].join('|||'),
    active_time: 10,
    total_time: 10,
    directions: [
      'Using a name processor fitted with an S-blade, combine beans, beet pieces, tahini, maple syrup, lemon juice, salt, and pepper and process until completely smooth, 3 to 5 minutes. Season with more salt, if needed.',
      'Transfer to a serving bowl, drizzle olive oil and hazelnut over it and then sprinkle with rosemary. Serve with fresh bread, crackers, or veggies.'].join('|||'),
    notes: 'This Roasted Beet Hummus with Hazelnut Oil & Rosemary recipe is a bright snack worthy of serving to guests but simple enough to enjoy with weekday meals.    Taken from https://www.vegetarianventures.com/roasted-beet-hummus-with-hazelnut-oil-rosemary/',
  },
  {
    title: 'Creamy Dragon Fruit Smoothie Bowl',
    image: '/Fruit_Smoothie_Bowls_5_minutes.png',
    tags: ['#Gluten-Free, #Vegan'].join('|||'),
    active_time: 5,
    total_time: 5,
    directions: [
      'To a high-speed blender, add frozen dragon fruit, frozen raspberries, banana, protein powder, and dairy-free milk (starting with lower end of range).Blend until creamy and smooth.',
      'Taste and adjust flavor as needed, adding more banana for sweetness, dairy-free milk for creaminess, or berries for more intense berry flavor.',
      'Divide between serving bowls and enjoy as is or top with fruit fruit, granola, hemp seeds, and coconut flakes (optional).'].join('|||'),
    notes: 'The trick to a thick smoothie bowl is being patient and blending slowly, adding only as much liquid as necessary.',
  }
];