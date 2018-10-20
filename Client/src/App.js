import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id='background' style={{backgroundImage: 'url("img/background.jpg")'}}>
        <Main />
      </div>
    );
  }
}
