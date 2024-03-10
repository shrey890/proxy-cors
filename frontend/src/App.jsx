import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    try {
      const res = await axios.get('/api/jokes');
      console.log('Fetched jokes:', res.data); // Log fetched data
      setJokes(res.data);
    } catch (error) {
      console.error('Error fetching jokes:', error);
      setJokes([]); // Set jokes to an empty array in case of an error
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div>
      {Array.isArray(jokes) && jokes.length > 0 ? (
        <div>
          <h1>{jokes.length}</h1>
          <ul>
            {jokes.map((joke) => (
              <li key={joke.id}>{joke.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>No jokes found</h1>
      )}
    </div>
  );
};

export default App;
