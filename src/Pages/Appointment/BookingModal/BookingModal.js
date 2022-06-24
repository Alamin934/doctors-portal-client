import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openModal, handleCloseModal, booking, date, setBookingSuccess }) => {
    const { name, time, price } = booking;



    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <Box sx={style}>
                    <Typography sx={{ color: '#1CC7C1', textAlign: 'center', mb: 2 }} id="transition-modal-title" variant="h6" component="div">
                        {name}
                    </Typography>
                    <form>
                        <TextField
                            disabled
                            label="Time"
                            sx={{ width: '100%', mb: 2 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            label="Your Name"
                            sx={{ width: '100%', mb: 2 }}
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            name="patientName"

                        />
                        <TextField
                            label="Phone Number"
                            sx={{ width: '100%', mb: 2 }}
                            id="outlined-size-small"
                            size="small"
                            name="phone"
                        />
                        <TextField
                            label="Email"
                            sx={{ width: '100%', mb: 2 }}
                            id="outlined-size-small"
                            size="small"
                            name="email"
                        />
                        <TextField
                            disabled
                            label="Date"
                            sx={{ width: '100%', mb: 2 }}
                            id="outlined-size-small"

                            size="small"
                        />
                        <Button type="submit" variant="contained">SUBMIT</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;