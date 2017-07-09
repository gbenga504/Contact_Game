import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Game from "./screens/Game";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Game} path="/game" />        
      </Switch>
    </Router>
  );
};

export default App;
