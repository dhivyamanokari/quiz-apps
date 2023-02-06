import React from 'react';
import './End.css';

const End = (props) => {
  return (
    <div className="End">
      <h1>Well done , <br></br> You have  completed the Quiz</h1>
      <button onClick={props.click}>
       View the result
      </button>
    </div>
  );
};

export default End
