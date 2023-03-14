import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";
import { getCategories } from "./HomeActions";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = useSelector((state) => state.home);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleClick = () => {
    if (selectedCategory) {
      navigate(`/joke/${selectedCategory}`);
    } else {
      navigate(`/joke/random`);
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          backgroundColor: "#00ABB3",
          borderRadius: "20px",
        }}
      >
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ my: 2, backgroundColor: "white", color: "#004d51" }}
        >
          <Typography variant="h6"> GET A RANDOM JOKE</Typography>
        </Button>
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            color: "white",
          }}
        >
          <Typography variant="h6">OR</Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
            Select the category you like:
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categories}
            fullWidth
            sx={{
              paddingTop: "15px",
              paddingBottom: "10px",
            }}
            renderInput={(params) => (
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "4px" }}
                {...params}
              />
            )}
            onInputChange={(event, newInputValue) => {
              setSelectedCategory(newInputValue);
            }}
          />
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{ my: 1, backgroundColor: "white", color: "#004d51" }}
          >
            <Typography variant="h6"> GET A JOKE</Typography>
          </Button>
        </Box>
      </div>
    </Container>
  );
};

export default Home;
