import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, List, Typography, Box } from "@mui/material";
import SavedItem from "./SavedItem";

const Saved = () => {
  const savedJokes = useSelector((state) => state.savedJokes);

  return (
    <>
      {savedJokes.length === 0 && (
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "grey", fontStyle: "italic" }}
            >
              Save a joke and you will see it here
            </Typography>
          </Box>
        </Container>
      )}
      <Container maxWidth="xl">
        <List sx={{ marginTop: "50px", marginBottom: "50px" }}>
          {savedJokes.map((joke) => (
            <SavedItem key={joke.id} jokeData={joke} joke={joke.value} />
          ))}
        </List>
      </Container>
    </>
  );
};

export default Saved;
