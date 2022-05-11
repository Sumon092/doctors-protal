import React from 'react';
import doctorImage from '../../assets/images/doctor.png'
import doctorBg from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${doctorBg})`
        }} className='flex justify-center items-center px-12 my-14'>
            <div className='flex-1 hidden lg:block'><img className='mt-[-150px]' src={doctorImage} alt="" /></div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl font-bold text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today </h2>
                <p className='text-white pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sint nulla sit modi magnam quasi assumenda debitis quibusdam rem quidem. Culpa incidunt, sapiente laudantium vel, repellendus eum, reprehenderit modi recusandae voluptate quasi facilis iusto ducimus magni? Tempora commodi expedita tempore.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;