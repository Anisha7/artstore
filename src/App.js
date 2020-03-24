import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ArtItem from "./components/ArtItem";
import "./App.css";

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/item/:item" component={ArtItem} />
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default App;
