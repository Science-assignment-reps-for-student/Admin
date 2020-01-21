import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login, Homework, Main } from './component'
import './style/reset.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/Make" component={Homework}/>
        <Route exact path="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
