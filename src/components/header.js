import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderItem">
        <Link to="/" className="HeaderText">Home</Link>
      </div>
      <div className="HeaderItem">
        <Link to="/projects" className="HeaderText">Projects</Link>
      </div>
      <div className="HeaderItem">
        <Link to="/tips" className="HeaderText">Tips</Link>
      </div>
    </div>
  );
}

export default Header;
