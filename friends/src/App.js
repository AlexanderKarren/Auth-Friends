import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './utils/PrivateRoute';
import Header from './components/Header'
import Friends from './components/Friends'
import Login from './components/Login'
import './App.css';

function App() {
  const [displayHeader, setHeaderDisplay] = useState(true);
  return (
    <div className="App">
      <Header displayHeader={displayHeader} setHeaderDisplay={setHeaderDisplay}/>
      <Switch>
        <PrivateRoute path="/friends" component={Friends} />
        <Route path="/">
          <Login setHeaderDisplay={setHeaderDisplay}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
