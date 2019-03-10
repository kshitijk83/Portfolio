import React, { Component } from 'react';
import './App.css';

// ----------------
// ROUTING PACKAGES
// ----------------
import { Route } from 'react-router-dom';

// --------------
// REDUX PACKAGES
// --------------

// --------------
// OTHER PACKAGES
// --------------


import Navbar from './containers/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/navbar" component={Navbar} />
      </div>
    );
  }
}

export default App;