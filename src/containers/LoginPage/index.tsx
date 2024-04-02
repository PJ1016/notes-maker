import React from "react";

import { Lock, Person } from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
const PaperCard = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(4),
}));
const CenteredBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
}));

const LoginPage = () => {
  return (
    <CenteredBox>
      <PaperCard elevation={5}>
        <Stack spacing={2}>
          <Typography fontWeight="bold">USER LOGIN</Typography>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
            type="password"
          />
          <Button variant="contained">LOGIN</Button>
        </Stack>
      </PaperCard>
    </CenteredBox>
  );
};

export default LoginPage;
