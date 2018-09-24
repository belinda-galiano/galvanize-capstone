
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
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
      ]);
    });
};
