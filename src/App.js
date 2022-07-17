import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import axios from 'axios';

// styles
import './index.css';

function App() {
  const [solution, setSolution] = useState(null);

  // fetching data from json server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://random-word-api.herokuapp.com/word?length=5'
        );
        const data = await response.data;

        // random word from the json array
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        console.log(randomSolution);

        // we just need a word for the object
        setSolution(randomSolution);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [setSolution]);

  return (
    <div className='App'>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
