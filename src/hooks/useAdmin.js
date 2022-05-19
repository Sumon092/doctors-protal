import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        console.log({ email });
        if (email) {
            console.log('inside user admin');
            fetch(`https://peaceful-headland-62606.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user])
    return [admin, adminLoading];
};

export default useAdmin;