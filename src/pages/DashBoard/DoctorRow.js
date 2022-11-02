import React from 'react';

const DoctorRow = ({ doctor, index }) => {
    const { name, img, specialty, email } = doctor;
    const handleDelete = email
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt={doctor.name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button className='btn btn-tiny btn-error text-white' >Delete</button></td>
        </tr>
    );
};

export default DoctorRow;