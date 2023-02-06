import React from 'react';
import './Score.css';

const Score = (props) => {
  return (
    <div className='Score'>
        <h2>
            Your Score : 
            {
                props.score < props.total && props.score > 1 ? (
                    <span>
                        {props.score} / {props.total} (Good)
                    </span>
                ) : props.score <=1 ? (
                    <span>
                        {props.score} / {props.total} (Do better next time)
                    </span>
                ) : (
                    <span>
                        {props.score} / {props.total} (Good)
                    </span>
                )
            }
        </h2>
        <h3>THANK YOU !</h3>
    
    </div>
  );
};

export default Score;
