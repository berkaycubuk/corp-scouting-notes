import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function LoggedInLinks() {
  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "white", fontSize: 18 }}
        to="/login"
      >
        Logout
      </Link>
    </>
  );
}

function LoggedOutLinks() {
  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "white", fontSize: 18 }}
        to="/login"
      >
        Login
      </Link>
    </>
  );
}

export default function Header() {
  return (
    <header style={{ marginBottom: "25px" }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography style={{ flexGrow: 1 }}>
              <Link
                style={{ textDecoration: "none", color: "white", fontSize: 20 }}
                to="/"
              >
                Crop Scouting Notes
              </Link>
            </Typography>
            <LoggedOutLinks />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
