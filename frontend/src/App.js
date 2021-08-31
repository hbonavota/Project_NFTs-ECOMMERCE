import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import Error from './components/Error/Error.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Login' component={Login}></Route>
        <Route path='/*' component={Error}></Route>
      </Switch>
    </div>
  )
}

export default App;