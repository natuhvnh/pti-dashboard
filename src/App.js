import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
