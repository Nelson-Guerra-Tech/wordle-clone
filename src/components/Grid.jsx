import React from 'react';
import Row from './Row';

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div className='grid'>
      <div className='grid-content'>
        {guesses.map((eachGuess, index) => {
          if (turn === index) {
            return <Row key={index} currentGuess={currentGuess} />;
          }

          return <Row key={index} guess={eachGuess} />;
        })}
      </div>
    </div>
  );
}
