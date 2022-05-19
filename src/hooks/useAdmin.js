import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const email = user?.email;
        console.log({ email });
        if (email) {
            console.log('inside usera admin');
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAdmin(data.admin);
                })
        }
    }, [user])
    return [admin];
};

export default useAdmin;