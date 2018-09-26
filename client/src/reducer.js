const data = {
  servingSize: '30g',
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
};

const data2 = {
  servingSize: '30g',
  calories: 2500,
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
};

const initialState = {
  recipes: [],
  nutrition: [data, data2],
};

function toggleFavorite(state, recipeId) {
  const recipesCopy = state.recipes.map((recipe) => {
    const copy = { ...recipe };

    if (copy.id === recipeId) {
      copy.favorite = !copy.favorite;
    }

    return copy;
  });

  return { ...state, recipes: recipesCopy };
}

export default function (state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case 'RECIPES_LOAD':
      return { ...state, recipes: action.payload };
    case 'RECIPE_CREATE':
      const recipesCopy = [...state.recipes];
      recipesCopy.push(action.payload);
      return { ...state, recipes: recipesCopy };

    case 'TOGGLE_FAVORITE':
      return toggleFavorite(state, action.payload.recipeId);

    default:
      break;
  }

  return state;
}
