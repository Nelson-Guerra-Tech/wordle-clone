import React, { useState, useEffect } from 'react';
import useWordle from '../hooks/useWordle.js';

// components
import Grid from './Grid.jsx';
import Keypad from './Keypad.jsx';
import Modal from './Modal.jsx';

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  // call this everytime a user uses a letter
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      console.log('Congrats you win');
      window.removeEventListener('keyup', handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      console.log('Unlucky, our of guesses');
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup, isCorrect, turn]);

  return (
    <>
      <div>solution - {solution}</div>
      <div>Current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </>
  );
}
