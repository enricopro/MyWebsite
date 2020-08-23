import React from 'react';
import '../App.css';
import Donations from "../components/donations";
import Donate from "../components/donate";

function Tips() {
  return (
    <div className="CentralPart">
      <Donations />
      <Donate />
  </div>
  );
}

export default Tips;
