import React, { Component } from 'react';
import './App.css';

import JokesProps from "../jokesprops.js";
import JokesData from "./jokesData.js";

class App extends Component {
  render() {
  const JokeComponent=JokesData.map(function (jokedata) {
  return (<JokesProps key={jokedata.id} question={jokedata.question} punchline={jokedata.punchline} />)
  });

    return (
      <div>
        {JokeComponent}
       </div>
    );
}
}

export default App;
