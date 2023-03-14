export const SAVE_JOKE = "saved/saveJoke";
export const GET_SAVED_JOKES = "saved/getSavedJokes";
export const EDIT_SAVED_JOKE = "saved/editSavedJoke";
export const DELETE_SAVED_JOKE = "saved/deleteSavedJoke";

export const saveJoke = (data) => ({
  type: SAVE_JOKE,
  payload: data,
});

export const editSavedJoke = (data, jokeNewValue) => {
  data.value = jokeNewValue;
  return {
    type: EDIT_SAVED_JOKE,
    payload: data,
  };
};
export const deleteSavedJoke = (data) => ({
  type: DELETE_SAVED_JOKE,
  payload: data,
});
