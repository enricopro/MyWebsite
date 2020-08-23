import React from 'react';
import '../App.css';
import Presentation from "../components/presentation";
import Social from "../components/social";

function Home() {
  return (
    <div className="CentralPart">
      <Presentation />
      <Social />
  </div>
  );
}

export default Home;
