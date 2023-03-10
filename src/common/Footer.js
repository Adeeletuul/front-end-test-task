import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "30px",
        marginTop: "auto",
        backgroundColor: "#3C4048",
        position: "sticky",
        bottom: 0,
      }}
    >
      <Typography variant="body1" color="white">
        {"Copyright © Adeele Tuuleveski "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
