import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Project from '../src/components/Project';

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> */}



      <Footer />
    </div>
  );
}

export default App;
