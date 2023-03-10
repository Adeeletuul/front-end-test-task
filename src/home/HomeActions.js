import axios from "axios";

export const GET_CATEGORIES = "home/getCategories";

export const getCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );

    dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  } catch (error) {
    console.log(error);
  }
};
