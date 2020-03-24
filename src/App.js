import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";

const App = () => (
  <div className="App">
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
