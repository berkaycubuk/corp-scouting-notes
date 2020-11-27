import React from "react";
import Header from "./components/Header";

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { Container } from "@material-ui/core";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <p style={{ margin: "auto", padding: "10px", textAlign: "center" }}>
          Created by{" "}
          <a
            style={{ color: "#3f51b5" }}
            href="https://berkaycubuk.com"
            target="_blank"
          >
            Berkay Çubuk
          </a>
        </p>
      </Container>
    </BrowserRouter>
  );
}
