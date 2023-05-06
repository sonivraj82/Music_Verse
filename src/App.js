import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>Home Page</h1>
      </section>
    </>
  );
};

const Search = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Search Page</h1>
      </section>
    </>
  );
};

const Libraray = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Libraray</h1>
      </section>
    </>
  );
};

const Play = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Play</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Search">
        <Search />
      </Route>

      <Route path="/Libraray">
        <Libraray />
      </Route>

      <Route path="/Play">
        <Play />
      </Route>
</Switch>
  );
};

export default App;
