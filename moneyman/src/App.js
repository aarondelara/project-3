import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'


function App() {
  return (
    <><Nav />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div></>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making API requests

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API call to fetch data from the backend
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Display fetched data */}
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
