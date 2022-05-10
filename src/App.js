import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Banner from './pages/Home/Banner';
import Home from './pages/Home/Home';

import Navbar from './pages/Shared/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/banner' element={<Banner />}></Route>
      </Routes>
    </div>
  );
};

export default App;