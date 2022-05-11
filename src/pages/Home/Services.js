import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: '',
            img: whitening
        },
    ]
    return (
        <div>
            <div className="text-center my-28">
                <h3 className='uppercase text-2xl text-primary font-bold'>Our services</h3>
                <h4 className='text-4xl'>Service We Provide</h4>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;