import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Banner from './pages/Home/Banner';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequiredAuth from './pages/Login/RequiredAuth/RequiredAuth';
import SignUp from './pages/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './pages/Shared/Navbar';
import Dashboard from './pages/DashBoard/Dashboard';
import MyAppointment from './pages/DashBoard/MyAppointment';
import MyReview from './pages/DashBoard/MyReview';
import Users from './pages/DashBoard/Users';


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
        <Route path="dashboard" element={<RequiredAuth><Dashboard /></RequiredAuth>} >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          {/* <Route path="history" element={<MyHistory></MyHistory>}></Route> */}
        </Route>
        {/* <Route path='/dashboard' element={
          <RequiredAuth>
            <Dashboard />
          </RequiredAuth>}>
          <Route index element={<MyAppointment />}></Route>
          <Route path='/myreview' element={<MyReview />}></Route>
        </Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;