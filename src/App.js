import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Home from './components/Home';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/calc" render={() => <Calculator />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
