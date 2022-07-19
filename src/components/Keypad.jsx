import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.jsonbin.io/v3/b/62d606775ecb581b56c4d236'
        );
        const data = await response.data;

        console.log(data);
        // we just need a key for the object
        setLetters(data.record.letters);
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
          const color = usedKeys[letter.key];
          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
}
