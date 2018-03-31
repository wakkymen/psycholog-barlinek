import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Navigation menuItems={items} />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />

      </div>
    );
  }
}

const items = [
  {id:1, name:'O mnie'},
  {id:1, name:'Artykuły'},
  {id:1, name:'Oferta'},
  {id:1, name:'Cennik'},
  {id:1, name:'Biofeedback'},
  {id:1, name:'Kontakt'}
];

export default App;
