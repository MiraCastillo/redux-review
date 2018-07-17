import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import C1 from "./components/C1";
import C2 from "./components/C2";

class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    return (
      <div className="App">
        <C1 />
        <C2 />
      </div>
    );
  }
}

export default App;
