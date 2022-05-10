import React from 'react';
import bannerImage from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse px-12">
                    <img src={bannerImage} class="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-7xl font-bold">Your New Smile
                            <br /> Starts Here!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        <button class="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary ...">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;