import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Banner from './pages/Home/Banner';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequiredAuth from './pages/Login/RequiredAuth/RequiredAuth';
import SignUp from './pages/Login/SignUp';

import Navbar from './pages/Shared/Navbar';

const App = () => {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/banner' element={<Banner />}></Route>
        <Route path='/appointment' element={
          <RequiredAuth>
            <Appointment></Appointment>
          </RequiredAuth>}>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
};

export default App;