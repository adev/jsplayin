import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/recipes';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Learning-React Recipes App</h1>
        </header>
        <div className="RecipesListing">
          <Menu recipes={data} />
        </div>
      </div>
    );
  }
}

export default App;
