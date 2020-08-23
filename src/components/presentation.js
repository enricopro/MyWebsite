import React, {useState} from 'react';
import '../App.css';

function Presentation() {

  const [job, setJob] = useState("");
  const [line, setLine] = useState("|");
  const array = ["J","u","n","i","o","r"," ","D","e","v","e","l","o","p","e","r"];

  useState(() => {
    flashingLine()
    let i = 0;
    let interval = setInterval(() => {
      setJob(prevJob => prevJob + array[i]);
      i++;
      if (i === 16)
        return clearInterval(interval);
    }, 400)
  }, [])

  function flashingLine () {
    let change = 0;
    setInterval(() => {
      if (change === 0) {
        setLine("|");
        change = 1;
      }
      else if (line === "|") {
        setLine("");
        change = 0;
      }
    }, 300)
  }

  return (
    <div className="PresentationContainer">
      <h1 className="Name">Enrico D'Alberton</h1>
        <div className="TypingSection">
          <h3 className="Name">{job}</h3>
          <h3 className="Line">{line}</h3>
        </div>
    </div>
  );
}

export default Presentation;
