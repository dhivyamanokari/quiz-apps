import React from 'react';
import './Question.css';

const Question = (props) => {
  return (
    <div className= "q">
     <h1>{props.qno} / {props.total}. {props.q}</h1> 
    </div>
  );
};

export default Question;
