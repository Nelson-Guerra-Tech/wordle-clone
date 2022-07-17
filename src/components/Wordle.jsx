import React, { useState, useEffect } from 'react';
import useWordle from '../hooks/useWordle.js';

// components
import Grid from './Grid.jsx';

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWordle(solution);

  // call this everytime a user uses a letter
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <>
      <div>solution - {solution}</div>
      <div>Current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </>
  );
}
