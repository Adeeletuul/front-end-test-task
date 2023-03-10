import { combineReducers } from "redux";
import JokeReducer from "../joke/JokeReducer";
import SavedReducer from "../saved/SavedReducer";
import HomeReducer from "../home/HomeReducer";

const rootReducer = combineReducers({
  jokes: JokeReducer,
  savedJokes: SavedReducer,
  home: HomeReducer,
});

export default rootReducer;
