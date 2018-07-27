import React, { Component } from "react";
import "./App.css";
import Currency from './Components/Currency';


class App extends Component {



  

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 id="page-title">Cryptocurrency Monitor</h1>
            <h3 id="page-subtitle">Real time data at your disposal</h3>
        </header>
        <Currency/>
      </div>
    );
  }
}

export default App;
