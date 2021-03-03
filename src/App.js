import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/Splash"

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{height: "100vh"}}>
        <Switch>
          <Route exact path="/" component={Splash} />
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
