import React from "react";
import SignUp from "./SignUp";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <SignUp />
      </Box>
    </>
  );
};

export default HomePage;
