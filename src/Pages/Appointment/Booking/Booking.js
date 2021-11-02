import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography sx={{ color: '#1CC7C1', fontWeight: 400 }} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="body2" component="div">
                        {time}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }} variant="caption" component="div">
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpenModal} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                openModal={openModal}
                handleCloseModal={handleCloseModal}
                date={date}
            >
            </BookingModal>
        </>
    );
};

export default Booking;