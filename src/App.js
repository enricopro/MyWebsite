import React from 'react';
import './App.css';
import Header from './components/header';
import Presentation from './components/presentation';
import Social from './components/social';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/home";
import Tips from "./pages/tips";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
    <div>
      <div>
      <Header />
      </div>
      <div className="App">
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/tips">
            <Tips />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
