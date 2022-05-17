import { useEffect, useState } from "react";
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/booking?${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [user])
    return (
        <div>
            <h3>My appointment {appointments.length}</h3>

            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Slots</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;