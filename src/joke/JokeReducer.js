import * as actions from "./JokeActions";

const initialState = [];

const JokeReducer = (jokes = initialState, action) => {
  switch (action.type) {
    case actions.GET_JOKE:
      if (action.payload.resetJokes) {
        return [action.payload.joke];
      } else {
        return [...jokes, action.payload.joke];
      }
    default:
      return jokes;
  }
};

export default JokeReducer;
