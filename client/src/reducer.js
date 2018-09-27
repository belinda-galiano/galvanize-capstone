import nutritionData from './nutrition_data';

const initialState = {
  recipes: [],
  nutrition: nutritionData,
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
