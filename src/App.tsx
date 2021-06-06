import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home  from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
                  </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
