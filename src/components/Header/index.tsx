import { Box, Typography } from "@mui/material";
import React from "react";
interface IHeader {
  title: string;
  subTitle: string;
}
const Header = ({ title, subTitle }: IHeader) => {
  return (
    <Box
      style={{
        backgroundColor: "black",
        textAlign: "center",
        fontFamily: "monospace",
        padding: "20px",
      }}
    >
      <Typography fontWeight="bold" fontSize="2rem" color="whitesmoke">
        {title}
      </Typography>
      <Typography fontWeight="bold" fontSize="1rem" color="#858584">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
