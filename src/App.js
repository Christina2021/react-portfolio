import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" />
          <Route exact path="/portfolio" />
          <Route exact path="/contact" />
          {/* Route for 404 page */}
          <Route />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
