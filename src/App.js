import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import AskQuestionPage from '/pages/AskQuestionPage';
import HomePage from '/pages/HomePage';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/AskQuestion' component={AskQuestionPage}/>
      <Route exact path='/:id' component={HomePage} />
      <Route exact path='/' component={HomePage} />
    </Switch>
    </div>
  );
}


export default App;
