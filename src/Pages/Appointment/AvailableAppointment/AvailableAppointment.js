import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 20
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price: 15
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        price: 25
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 19
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price: 17
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price: 35
    },
]
const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <div>
            <Box sx={{ pb: 7 }}>
                <Container>
                    <Typography variant="h5" component="div" sx={{ color: '#1CC7C1', mb: 4, fontWeight: 'bold' }}>Available Appointments on {date.toDateString()}</Typography>
                    {bookingSuccess && <Alert sx={{ fontSize: 20, mb: 3 }} severity="success">Appointment Booking Successfully</Alert>}
                    <Grid container spacing={2}>
                        {
                            bookings.map(booking => <Booking
                                key={booking.id}
                                booking={booking}
                                date={date}
                                setBookingSuccess={setBookingSuccess}
                            />)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default AvailableAppointment;