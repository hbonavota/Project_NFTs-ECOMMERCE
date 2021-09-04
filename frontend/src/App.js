import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import theme from "./components/ui/Theme"
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import Error from './components/Error/Error.jsx'
import NavBar from './components/NavBar/NavBar.js'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route path='/*' component={Error}></Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App;