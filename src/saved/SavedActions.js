export const SAVE_JOKE = "saved/saveJoke";
export const GET_SAVED_JOKES = "saved/getSavedJokes";
export const EDIT_SAVED_JOKE = "saved/editSavedJoke";
export const DELETE_SAVED_JOKE = "saved/deleteSavedJoke";

export const saveJoke = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SAVE_JOKE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getSavedJokes = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SAVED_JOKES,
    });
  } catch (error) {
    console.log(error);
  }
};
export const editSavedJoke = (data, jokeNewValue) => async (dispatch) => {
  data.value = jokeNewValue;
  try {
    dispatch({
      type: EDIT_SAVED_JOKE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteSavedJoke = (data) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_SAVED_JOKE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
