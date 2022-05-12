import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Do You Want to Book {name}?</h3>
                    <form className='grid grid-cols-1 justify-items-center gap-5 mt-5'>
                        <input type="text" value={format(date, 'PP')} disabled class="input input-bordered w-full max-w-xs" />
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className='btn btn-secondary w-full max-w-xs' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;