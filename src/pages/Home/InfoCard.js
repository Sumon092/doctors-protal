import React from 'react';


const InfoCard = ({ img, bgColor, cardText }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgColor}`}>
            <figure className='pl-5'>
                <img className='mt-5' src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title text-white">{cardText}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div> */}
            </div>
        </div>
    );
};

export default InfoCard;