import './App.css';
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
