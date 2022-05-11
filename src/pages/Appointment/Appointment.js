import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import Service from './Service';



const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div >
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            {/* <Service></Service> */}
            <Footer></Footer>
        </div>
    );
};

export default Appointment;