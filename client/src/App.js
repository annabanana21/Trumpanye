import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Display from './pages/display';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/diss' component={Display} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
