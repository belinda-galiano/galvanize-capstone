// passing store as an argument I can
export function getRecipes(store) {
  fetch('http://localhost:8080/recipes')
    .then(response => response.json())
    .then((data) => {
      store.dispatch({
        type: 'RECIPES_LOAD',
        payload: data,
      });
    });
}

export default {
  getRecipes,
};
