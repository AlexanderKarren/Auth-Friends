import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './utils/PrivateRoute';
import Header from './components/Header'
import Friends from './components/Friends'
import Login from './components/Login'
import './App.css';

function App() {
  const [friends, updateFriends] = useState([]);
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute path="/friends" component={Friends} />
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
