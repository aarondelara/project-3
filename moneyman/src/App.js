import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard2';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import DataForm from './components/DataForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/data" component={DataForm} />
      </Switch>
    </Router>
  );
}

export default App;
