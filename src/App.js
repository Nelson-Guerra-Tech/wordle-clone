import { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import './index.css';

function App() {
  const [solution, setSolution] = useState(null);

  // fetching data from json server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/solutions');
        const data = await response.data;

        // random word from the json array
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        // we just need a word for the object
        setSolution(randomSolution.word);

        console.log(randomSolution);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [setSolution]);

  return (
    <div className='App'>
      <h1>Wordle</h1>
      {solution && <div>Solution is: {solution}</div>}
    </div>
  );
}

export default App;
