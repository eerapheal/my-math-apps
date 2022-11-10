import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './component/calculator';
import Home from './component/Home';
import Nav from './component/Nav';
import Statement from './component/statement';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
