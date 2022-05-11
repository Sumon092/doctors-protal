import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
import Revies from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            img: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Harry',
            img: people2,
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Harry',
            img: people3,
            location: 'California'
        },
    ]
    return (
        <section className='my-25'>
            <div className='flex justify-between px-12'>
                <div>
                    <h4 className='text-primary text-xl font-bold'>Testimonials</h4>
                    <h2 className="text-3xl">What Our Patients Say</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;