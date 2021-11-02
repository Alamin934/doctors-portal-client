import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <div>
            <Box sx={{ pt: 9 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Calender date={date} setDate={setDate}></Calender>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: 400 }} src={chair} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default AppointmentHeader;