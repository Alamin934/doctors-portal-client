import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const bannerBg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundColor: '#ededed',
    backgroundSize: 'cover'

}
const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1, py: 18 }}>
            <Container>
                <Grid container spacing={2} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left', alignItems: 'center', display: 'flex' }}>
                        <Box>
                            <Typography variant="h4" component="div" sx={{ color: '#001E3C', fontWeight: 'bold' }}>
                                Make an appointment Today
                            </Typography>
                            <Typography variant="body-2" component="div" sx={{ my: 2, color: 'text.secondary' }}>
                                It is a long established fact that a reaader will be distractedby the readable content of a page when looking at its.
                            </Typography>
                            <Button variant="contained" sx={{ mt: 4 }}>GET APPOINTMENT</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: 400 }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;