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
      </Container>
    </BrowserRouter>
  );
}
