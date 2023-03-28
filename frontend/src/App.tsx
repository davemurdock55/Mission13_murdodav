import React from 'react';
import './App.css';
import './custom.scss';
// import './Text.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Podcasts from './components/Podcasts';
import Movies from './components/Movies';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ marginTop: '90px' }}></div>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Home /> */}
          </Route>
          <Route path="/podcasts" element={<Podcasts />}>
            {/* <Podcasts /> */}
          </Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
