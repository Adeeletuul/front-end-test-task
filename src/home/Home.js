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
    console.log("dispatchitud");
    dispatch(getCategories());
  }, []);

  const handleClick = () => {
    console.log("handleClike tehtud");
    if (selectedCategory) {
      console.log("valitud category");
      navigate(`/joke/${selectedCategory}`);
    } else {
      console.log("valitud random");
      navigate(`/joke/random`);
    }
  };

  return (
    <Container
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
          size="large"
          onClick={handleClick}
          sx={{ backgroundColor: "white", color: "#004d51", padding: "15px" }}
        >
          GET A RANDOM JOKE
        </Button>
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            fontSize: "25px",
            color: "white",
          }}
        >
          OR
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
            sx={{
              width: "250px",
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
            size="large"
            onClick={handleClick}
            sx={{ backgroundColor: "white", color: "#004d51" }}
          >
            GET A JOKE
          </Button>
        </Box>
      </div>
    </Container>
  );
};

export default Home;
