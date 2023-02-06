import React from 'react';
import "./Intro.css";
const Intro = (props) => {
  return (
    <div className="Main-content">
      <h1>React Quiz</h1>
      <h2>This Quiz Contains 5 Questions</h2>
      <h2>Each question Carries 1 Mark</h2>
      <center>
        <button onClick={props.clickevent}>Test Your Skill</button>
      </center>
    </div>
  );
};

export default Intro
