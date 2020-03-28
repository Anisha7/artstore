import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ArtItem from "./components/ArtItem";
import Cart from "./components/Cart";
import "./App.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
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
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  </Provider>
);

export default App;
