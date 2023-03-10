import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
} from "@mui/material";

const Header = () => {
  return (
    <CssBaseline>
      <AppBar sx={{ position: "initial", backgroundColor: "#3C4048" }}>
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1, color: "white" }}>
            CHUCK NORRIS JOKES
          </Typography>
          <Link to="/" className="nav-link">
            <Button
              aria-label="home page"
              sx={{
                padding: "20px",
              }}
            >
              <Typography variant="h4" sx={{ color: "white" }}>
                HOME
              </Typography>
            </Button>
          </Link>
          <Link to="/saved" className="nav-link">
            <Button
              aria-label="saved jokes"
              sx={{
                padding: "20px",
              }}
            >
              <Typography variant="h4" sx={{ color: "white" }}>
                SAVED JOKES
              </Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default Header;
