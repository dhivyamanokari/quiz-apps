import React from 'react';
import "./Options.css";

const Options = (props) => {
 const opt = Object.keys(props.opt).map(opt => {
  return(
    <li key = {opt} onClick = {() => props.clickevent(opt)} className = {props.correctOption === opt ?  'crt' : props.clickedOption === opt ? 'incrt' : ''}> 
    {opt}  {props.opt[opt]} </li>
  )
 });
 return(
  <div>
    <ul className="options" disabled = {props.clickedOption ? true : false }>
      {opt}
    </ul>
    {
      props.result ? props.correctOption === props.clickedOption ? (
        <p className='p1'>correct Answer. </p>
      ) : (
    <p className='p2'> Answer is incorrect</p>
      ) : null
    }
  </div>
 );
};

export default Options;
