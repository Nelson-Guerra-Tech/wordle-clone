import { useState } from 'react';

// hook for game functions
const useWordle = (solution) => {
  // what turn the user is on
  const [turn, setTurn] = useState(0);
  // tracking what the user is currently typing
  const [currentGuess, setCurrentGuess] = useState('');
  // as user dubmits guess, we add a guess to the array / formatted guesses
  const [guesses, setGuesses] = useState([]); // each guess is an array
  // store past guesses in this array, the guesses are simple strings
  const [history, setHistory] = useState([]); // each guess is a string
  // only changing to true if the user wins the game
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  const formatGuess = () => {};

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {};

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = () => {};

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
