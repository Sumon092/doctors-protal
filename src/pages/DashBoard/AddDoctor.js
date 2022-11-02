import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../pages/Shared/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const url = 'http://localhost:5000/treatments';
    // console.log(url);

    const { data: services, isLoading } = useQuery('services', () => fetch(url).then(res => res.json()));
    const imageStorageKey = '087dae0e6f04eb454c999ef99913f5ef';



    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(results => {
                const img = results.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // console.log('imagebb', results);
                //send tgo your database
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(insert => {
                        if (insert.insertedId) {
                            toast.success('doctor added successfully');
                            reset()
                        }
                        else {
                            toast.error('Failed to add a doctor')
                        }
                        // console.log('doctor', insert);
                    })
            })

        // console.log(data);
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    /**
     * 3 ways to store image
     * 1. Third party storage// free open public storage is ok for practice project
     * 2.Your own storage in your own server(file system)
     * 3.Database : MongoDb
     * 
     * YUP : to validate file system: search: YUP file validation for react hook form
    */
    return (
        <div>
            <h2 className='text 2xl'>Add a Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Doctor Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Doctor's Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialization</span>
                    </label>
                    <select {...register('specialty')} class="select select-bordered w-full max-w-xs">
                        {
                            services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                        }
                    </select>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Doctor Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'photo is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>


                <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;