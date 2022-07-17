import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Keypad() {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/letters');
        const data = await response.data;

        // we just need a key for the object
        setLetters(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='keypad'>
      {letters &&
        letters.map((letter) => {
          return <div key={letter.key}>{letter.key}</div>;
        })}
    </div>
  );
}
