import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://my-chat-apps.vercel.app/">
          MY Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }