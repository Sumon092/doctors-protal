import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg shadow-xl justify-center">
            <div class="card-body">
                <h2 class="card-title justify-center text-primary font-bold">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span> : <span className='text-red-400'>Try Another Date</span>
                }</p>
                <p>
                    {slots.length}{slots.length > 1 ? 'spaces' : 'space'} available
                </p>
                <div class="card-actions justify-center">

                    <label for="my-modal-6"
                        onClick={() => setTreatment(service)} disabled={slots.length === 0}
                        class=" uppercase btn btn-secondary text-white font-bold">book appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;