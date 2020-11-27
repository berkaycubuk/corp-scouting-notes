import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

function Header(props) {
  const { auth } = props;
  return (
    <header style={{ marginBottom: "25px" }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography style={{ flexGrow: 1 }}>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "white", fontSize: 20 }}
              >
                Crop Scouting Notes
              </Link>
            </Typography>
            {auth.uid ? (
              <a
                style={{ textDecoration: "none", color: "white", fontSize: 18 }}
                onClick={props.signOut}
                href="#"
              >
                Logout
              </a>
            ) : (
              <Link
                style={{ textDecoration: "none", color: "white", fontSize: 18 }}
                to="/login"
              >
                Login
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
