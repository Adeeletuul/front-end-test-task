import * as actions from "./HomeActions";

const initialState = [];

const HomeReducer = (categories = initialState, action) => {
  switch (action.type) {
    case actions.GET_CATEGORIES:
      return action.payload;
    default:
      return categories;
  }
};

export default HomeReducer;
