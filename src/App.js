import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from './components/About/About'
import Discover from './components/Discover/Discover'
import Search from './components/Search/Search'
import "./App.css"

const App = () => {

  return (
      <div className='main'>
        <div>
          <Router>
            <Link to="/">Puppster</Link>
            <Link to="/About">About</Link>
            <Link to="/Discover">Discover</Link>
            <Link to="/Search">Search</Link>

            <Switch>
              <Route exact path="/About" component={About} />
              <Route exact path="/Discover" component={Discover} />
              <Route exact path="/Search" component={Search} />
            </Switch>
          </Router>
        </div>
      </div>
  );
};

export default App;
