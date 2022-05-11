import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    {/* <h2 class="card-title">Card title!</h2> */}
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum debitis nisi blanditiis architecto voluptatum nobis doloribus voluptas hic? Voluptate, suscipit.</p>
                    <div class="flex items-center">
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} />
                            </div>
                        </div>
                        <div>
                            <h3>{review.name}</h3>
                            <h4>{review.location}</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;