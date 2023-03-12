import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container, Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { getJoke } from "./JokeActions";
import { deleteSavedJoke, saveJoke } from "../saved/SavedActions";

const Joke = () => {
  const [jokesFromArray, setJokesFromArray] = useState(false);
  const [jokeIndex, setJokeIndex] = useState(0);

  const jokes = useSelector((state) => state.jokes);
  console.log(jokes);
  const joke = jokes[jokeIndex] || {};
  const savedJokes = useSelector((state) => state.savedJokes);

  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJoke(category, true));
  }, []);

  const jokeInSavedJokes = useMemo(() => {
    return savedJokes.some((savedJoke) => savedJoke.id === joke.id);
  }, [savedJokes, joke]);

  const handlePreviousJokeClick = () => {
    if (jokeIndex > 0) {
      setJokesFromArray(true);
      setJokeIndex(jokeIndex - 1);
    }
  };

  const handleNewJokeClick = () => {
    if (jokesFromArray === false) {
      dispatch(getJoke(category));
      setJokeIndex(jokeIndex + 1);
    } else if (jokesFromArray === true && jokeIndex === jokes.length - 2) {
      setJokeIndex(jokeIndex + 1);
      setJokesFromArray(false);
    } else if (jokesFromArray === true && jokeIndex < jokes.length - 1) {
      setJokeIndex(jokeIndex + 1);
    }
  };

  const handleSaveJokeClick = () => {
    if (!jokeInSavedJokes) {
      dispatch(saveJoke(joke));
    } else if (jokeInSavedJokes) {
      dispatch(deleteSavedJoke(joke));
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00ABB3",
        height: "100%",
      }}
    >
      <Box sx={{ maxWidth: "50%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <IconButton
            aria-label="save joke"
            component="label"
            size="medium"
            onClick={handleSaveJokeClick}
            sx={{
              position: "absolute",
            }}
          >
            {jokeInSavedJokes ? (
              <FavoriteIcon
                sx={{
                  color: "#FFEA20",
                  fontSize: 50,
                }}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{
                  fontSize: 50,
                }}
              />
            )}
          </IconButton>
        </Box>
        <Box sx={{ backgroundColor: "white" }}>
          <Typography
            variant="h4"
            sx={{
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "70px",
              paddingBottom: "70px",
              color: "#00656b",
              fontWeight: "bold",
            }}
          >
            {joke.value}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            backgroundColor: "#3C4048",
            padding: 0,
          }}
        >
          <IconButton
            aria-label="next joke"
            component="label"
            size="medium"
            onClick={handlePreviousJokeClick}
          >
            <ChevronLeftIcon
              sx={{ fontSize: 50, color: "white" }}
            />
          </IconButton>
          <IconButton
            aria-label="next joke"
            component="label"
            size="medium"
            onClick={handleNewJokeClick}
          >
            <NavigateNextIcon sx={{ fontSize: 50, color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Joke;
