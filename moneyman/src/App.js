import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './App.css';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Money Man</h1>
  );
}

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


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API call to fetch data from the backend
    axios.get('http://localhost:3000/')
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

function App() {
  const [date, setDate] = useState(new Date())
 
 
 
 return (
  <div className="app">
    <h1 className="header">React Calendar</h1>
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date}/>
    </div>
    <div className="text-center">
       Selected date: {date.toDateString()}
    </div>
  </div>
   )
 
{'}'}
 
 export default App;