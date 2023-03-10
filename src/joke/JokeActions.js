import axios from "axios";

export const GET_JOKE = "joke/getJoke";

export const getJoke =
  (category, resetJokes = false) =>
  async (dispatch) => {
    try {
      let joke;
      if (category === "random") {
        joke = await axios.get(`https://api.chucknorris.io/jokes/random`);
      } else {
        joke = await axios.get(
          `https://api.chucknorris.io/jokes/random?category=${category}`
        );
      }
      dispatch({
        type: GET_JOKE,
        payload: { joke: joke.data, resetJokes },
      });
    } catch (error) {
      console.log(error);
    }
  };
