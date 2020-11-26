import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

export default function Login() {
  return (
    <div>
      <Card style={{ maxWidth: "600px", margin: "auto" }}>
        <CardContent>
          <Typography variant="h5">Login</Typography>
          <form
            style={{ marginTop: "10px", marginBottom: "10px" }}
            noValidate
            autoComplete="off"
          >
            <div style={{ marginTop: "10px" }}>
              <TextField id="loginEmail" label="E-mail" fullWidth required />
            </div>
            <div style={{ marginTop: "10px" }}>
              <TextField
                id="loginPassword"
                label="Password"
                fullWidth
                required
              />
            </div>
            <Button
              style={{ marginTop: "20px" }}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
