import * as actions from "./JokeActions";

const initialState = [];

const JokeReducer = (jokes = initialState, action) => {
  switch (action.type) {
    case actions.GET_JOKE:
      if (action.payload.resetJokes) {
        return [action.payload.jokeData];
      } else {
        return [...jokes, action.payload.jokeData];
      }
    default:
      return jokes;
  }
};

export default JokeReducer;
