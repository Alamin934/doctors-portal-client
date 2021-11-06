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
    const { name, time } = booking;
    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }


    const handleBookingSubmit = (e) => {
        //Collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        fetch('http://localhost:5000/appointment', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                }
            })

        e.preventDefault();
        handleCloseModal();
    };


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
                    <form onSubmit={handleBookingSubmit}>
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
                            defaultValue={user?.displayName}
                            size="small"
                            name="patientName"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            label="Phone Number"
                            sx={{ width: '100%', mb: 2 }}
                            id="outlined-size-small"
                            size="small"
                            name="phone"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            label="Email"
                            sx={{ width: '100%', mb: 2 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            disabled
                            label="Date"
                            sx={{ width: '100%', mb: 2 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
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