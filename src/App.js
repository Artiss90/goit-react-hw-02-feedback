import React, { Component } from 'react';
import style from './App.module.css';

class App extends Component() {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return <div className={style.head}></div>;
  }
}

export default App;
