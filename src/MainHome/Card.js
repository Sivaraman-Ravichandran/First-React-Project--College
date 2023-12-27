import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../images/shareifyLogo.jpg";
import "../Authentication/login.css";
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const navigate = useNavigate();
  const NextSuccess = () => {
    alert("Payment Success");
    navigate('/Home')
  };
  const Back = () => {
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/Signup");
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="error" className="loginlogo" />
          <Typography component="h1" variant="h5">
            Card Payment
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <label>Card Holder's Name:</label>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              name="email"
            />
            <label>Card Number:</label>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Number"
              type="number"
            />
            <label>Card Exp. Date:</label>
            <TextField margin="normal" required type="date" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={NextSuccess}
            >
              Pay
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
