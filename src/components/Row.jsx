import React from 'react';

export default function Row({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className='row past'>
        {guess.map((letter, index) => (
          <div key={index} className={letter.color}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split('');

    return (
      // map through each letter and output them in the grid
      <div className='row current'>
        {letters.map((letter, index) => (
          <div key={index} className='filled'>
            {letter}
          </div>
        ))}

        {/* print out each letter but also an empty div for the empty boxes */}
        {[...Array(5 - letters.length)].map((value, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }

  return (
    <div className='row'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
