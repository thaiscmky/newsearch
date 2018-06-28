import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Home";
import Detail from "./pages/Saved";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
);

export default App;
