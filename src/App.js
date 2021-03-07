import React from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Discover from './components/Discover/Discover'
import Search from './components/Search/Search'

import "./App.css"

const App = () => {

  return (
    <Router> 
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/about' component={About}/>
          <Route path='/discover' component={Discover} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
