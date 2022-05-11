import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-12'>
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary ..." cardText="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgColor="bg-accent" cardText="Our Time" img={location}></InfoCard>
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary ..." cardText="Our locations" img={phone}></InfoCard>
        </div>
    );
};

export default Info;