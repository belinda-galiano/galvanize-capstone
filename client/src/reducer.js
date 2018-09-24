const initialState = {
  recipes: [],
  dataNutrition: [],
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
      const newRecipe = {
        ...action.payload,
        id: state.recipes.length + 100,
      };
      recipesCopy.push(newRecipe);
      return { ...state, recipes: recipesCopy };

    case 'TOGGLE_FAVORITE':
      return toggleFavorite(state, action.payload.recipeId);

    default:
      break;
  }

  return state;
}
