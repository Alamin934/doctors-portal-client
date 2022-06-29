import { Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = () => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user.email])
    return (
        <div>
            <Typography variant="h6" noWrap component="div">
                Appointments {appointments.length}
            </Typography>
        </div>
    );
};

export default Appointments;