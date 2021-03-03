import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/Splash";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{height: "100vh"}}>
        <Switch>
          <Route exact path="/react-portfolio/" component={Splash} />
          <Route exact path="/react-portfolio/about" component={AboutMe} />
          <Route exact path="/react-portfolio/portfolio" component={Portfolio}/>
          <Route exact path="/react-portfolio/contact" component={Contact}/>
          {/* Route for 404 page */}
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
