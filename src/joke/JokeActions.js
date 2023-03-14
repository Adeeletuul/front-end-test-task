import axios from "axios";
export const GET_JOKE = "joke/getJoke";
export const getJoke =
  (category, index, resetJokes = false) =>
  async (dispatch, getState) => {
    try {
      let newJoke;
      if (category === "random") {
        newJoke = await axios.get(`https://api.chucknorris.io/jokes/random`);
      } else {
        newJoke = await axios.get(
          `https://api.chucknorris.io/jokes/random?category=${category}`
        );
      }
      const onJubaOlnud = getState().jokes.some(
        (joke) => joke.id === newJoke.data.id
      );

      if (!onJubaOlnud) {
        dispatch({
          type: GET_JOKE,
          payload: { jokeData: newJoke.data, resetJokes },
        });
        return index + 1;
      }
      return index + 1;
    } catch (error) {
      console.log(error);
    }
  };
