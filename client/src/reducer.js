import { recipes, dataNutrition } from './data';

const initialState = {
  recipes,
  dataNutrition,
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
    case 'TOGGLE_FAVORITE':
      return toggleFavorite(state, action.payload.recipeId);

    default:
      break;
  }

  return state;
}
