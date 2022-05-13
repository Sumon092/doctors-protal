import React from 'react';
import bannerImage from '../../assets/images/chair.png'
// import backgroundImage from '../../assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';
import backgroundImage from '../../assets/images/bg.png'

const Banner = () => {
    return (

        <div style={{
            background: `url(${backgroundImage})`,
            backgroundSize: 'cover'
        }}
            className="hero min-h-screen bg-base-100" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile
                        <br /> Starts Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;