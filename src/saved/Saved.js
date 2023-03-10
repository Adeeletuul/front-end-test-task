import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, List } from "@mui/material";
import { getSavedJokes } from "./SavedActions";
import SavedItem from "./SavedItem";

const Saved = () => {
  const savedJokes = useSelector((state) => state.savedJokes);
  console.log(savedJokes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSavedJokes());
  }, []);

  return (
    <Container>
      <List sx={{ marginTop: "50px", marginBottom: "50px" }}>
        {savedJokes.map((joke) => (
          <SavedItem key={joke.id} jokeData={joke} joke={joke.value} />
        ))}
      </List>
    </Container>
  );
};

export default Saved;
