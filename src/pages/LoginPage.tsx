// LoginPage.tsx
import { Card, CardMedia, Container, Grid } from "@mui/material";
import GenericInput from "../components/GenericInput";
import GenericSubmitButton from "../components/GenericButton";
import loginbg from "./../images/loginbg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (id === "42030328" && password === "112233") {
      navigate("/AddMembers");
      console.log("okay ");
    } else {
      alert("Invalid credentials. Please try again.");
      setId("");
      setPassword("");
    }
  };
  return (
    <Container>
      <h1 style={{ fontFamily: "monospace" }}>Tiger's Gym </h1>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              alt="My Image"
              height="500"
              image={loginbg} // Replace with the URL of your image
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ paddingTop: 15 }}>
          <h3>Login</h3>
          <GenericInput
            id="filled-basic"
            label="Username"
            variant="outlined"
            value={id} // Pass the value prop
            onChange={(newValue) => setId(newValue)}
          />
          <GenericInput
            id="filled-basic"
            label="Password"
            variant="outlined"
            value={password} // Pass the value prop
            onChange={(newValue) => setPassword(newValue)}
          />

          <GenericSubmitButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            text="submit"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
