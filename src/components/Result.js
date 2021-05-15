import React from "react";
import * as reactbs from 'react-bootstrap';

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <div className='playBtn'>
      <reactbs.Button variant='success' size='lg' onClick={playAgain} >
      Play again!
    </reactbs.Button></div>
  </div>
);

export default Result;
