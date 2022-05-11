import React from 'react';
import dentalCareImage from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row gap-40">
                <img src={dentalCareImage} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-100'>
                    <h1 class="text-5xl font-bold">Exectional dental care ,
                        <br />On your terms!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;