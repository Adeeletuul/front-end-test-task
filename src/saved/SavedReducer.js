import * as actions from "./SavedActions";

const initialState = [];
const SavedReducer = (savedJokes = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_JOKE:
      return [...savedJokes, action.payload];
    case actions.EDIT_SAVED_JOKE:
      return savedJokes.map((savedJoke) => {
        if (savedJoke.id === action.payload.id) {
          return action.payload;
        } else {
          return savedJoke;
        }
      });
    case actions.DELETE_SAVED_JOKE:
      return savedJokes.filter(({ id }) => id !== action.payload.id);
    default:
      return savedJokes;
  }
};

export default SavedReducer;
