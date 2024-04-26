import React from "react";
import { CircularProgress, Stack } from "@mui/material";

const LoadingPage = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Stack>
  );
};

export default LoadingPage;
