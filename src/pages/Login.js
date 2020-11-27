import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Card style={{ maxWidth: "600px", margin: "auto" }}>
          <CardContent>
            <Typography variant="h5">Login</Typography>
            <form
              style={{ marginTop: "10px", marginBottom: "10px" }}
              noValidate
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <div style={{ marginTop: "10px" }}>
                <TextField
                  id="email"
                  label="E-mail"
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <TextField
                  id="password"
                  label="Password"
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
              </div>
              <Button
                style={{ marginTop: "20px" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
