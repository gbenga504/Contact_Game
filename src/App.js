import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
    </Router>
  );
};

export default App;
