import React from 'react';

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>You Won! 🥳</h1>
          <p className='solution'>
            The correct word: <h3>{solution}</h3>
          </p>
          <p>You found the solution is {turn} guesses! 😊</p>
        </div>
      )}

      {!isCorrect && (
        <div>
          <h1>No More Guesses! 😬</h1>
          <p className='solution'>
            The correct word: <h3>{solution}</h3>
          </p>
          <p>Better luck next time 😎</p>
        </div>
      )}
    </div>
  );
}
