import { useState } from 'react';

// hook for game functions
const useWordle = (solution) => {
  // what turn the user is on
  const [turn, setTurn] = useState(0);
  // tracking what the user is currently typing
  const [currentGuess, setCurrentGuess] = useState('');
  // as user dubmits guess, we add a guess to the array / formatted guesses
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  // store past guesses in this array, the guesses are simple strings
  const [history, setHistory] = useState([]); // each guess is a string
  // only changing to true if the user wins the game
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter object
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: 'grey' };
    });

    //   find any green letters
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formattedGuess[i].color = 'green';
        solutionArray[i] = null;
      }
    });

    //   find any yellow colors
    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        formattedGuess[i].color = 'yellow';

        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;

    console.log(`Formatting the current guess - ${currentGuess}`);
    return;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setCurrentGuess('');
  };

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      // only add guess if turn is less than 5
      if (turn > 5) {
        console.log('You used all your guesses');
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log('You already tried that word');
        return;
      }
      // check word is 5 chars long
      if (currentGuess.length !== 5) {
        console.log('Word must be 5 chars long');
        return;
      }

      // only call this function if everything else works
      const formatted = formatGuess();
      addNewGuess(formatted);
      console.log(formatted);
    }

    // when we hit backspace, we delete one letter
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    // user typing only a letter key
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
