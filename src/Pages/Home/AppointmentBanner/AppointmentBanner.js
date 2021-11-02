import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png'

const appointmentBg = {
    backgroundImage: `url(${bg})`,
    marginTop: '150px',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(26, 36, 60, 0.78)',
    backgroundBlendMode: 'darken,luminosity'

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: 400, marginTop: '-110px' }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left', color: 'white', alignItems: 'center', display: 'flex' }}>
                        <Box>
                            <Typography variant="h6" component="div" sx={{ color: '#4ed1d6', mb: 1 }}>
                                APPOINTMENT
                            </Typography>
                            <Typography variant="h4" component="div">
                                Make an appointment Today
                            </Typography>
                            <Typography variant="body-2" component="div" sx={{ my: 2 }}>
                                It is a long established fact that a reaader will be distractedby the readable content of a page when looking at its.
                            </Typography>
                            <Button variant="contained" sx={{ mt: 4 }}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;