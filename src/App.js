import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './comps/header.js';
import Main from './comps/main.js';
import Footer from './comps/footer.js';
import FacebookScript from './comps/facebookscript.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <FacebookScript />
      </div>
    );
  }
}

export default App;
