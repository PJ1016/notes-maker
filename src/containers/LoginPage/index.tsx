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
import { useNavigate } from "react-router-dom";
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
type TLoginPage = {
  handleLoginSuccess: any;
};
const LoginPage = ({ handleLoginSuccess }: TLoginPage) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    handleLoginSuccess(true);
    navigate("/");
  };
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
          <Button variant="contained" onClick={handleLogin}>
            LOGIN
          </Button>
        </Stack>
      </PaperCard>
    </CenteredBox>
  );
};

export default LoginPage;
