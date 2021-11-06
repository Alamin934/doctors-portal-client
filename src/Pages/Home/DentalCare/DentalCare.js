import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import treatment from '../../../images/treatment.png'

const DentalCare = () => {
    return (
        <Box sx={{ mt: 5 }}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '80%' }} src={treatment} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <Typography variant="h4" component="div" sx={{ fontWeight: '500' }}>
                            Exceptional Dental<br />Care, on Your Terms
                        </Typography>
                        <Typography variant="body1" component="div" sx={{ my: 2, color: 'text.secondary' }}>
                            It is a long established fact that a reader will be distracted byb the readable content of a page when looking at its layout. the point of using Lorem Ipsumis that is has a more-or-leess normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pages.
                        </Typography>
                        <Button variant="contained" sx={{ mt: 3 }}>Learn More</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DentalCare;