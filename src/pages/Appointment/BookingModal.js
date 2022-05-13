import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const handleSubmit = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(slot, name);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Do You Want to Book {name}?</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center gap-5 mt-5'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Enter Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Enter Phone No." className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className='btn btn-secondary w-full max-w-xs' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;