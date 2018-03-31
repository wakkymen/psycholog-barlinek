import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>

          <Navigation>

          </Navigation>
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;
