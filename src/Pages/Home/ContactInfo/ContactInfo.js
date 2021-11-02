import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactInfo = () => {

    return (
        <Box sx={{ flexGrow: 1, mt: -14 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} sx={{ textAlign: 'left' }}>
                    {/* Opening Our */}
                    <Grid item xs={12} sm={4} md={4}>
                        <Card sx={{ p: 4, display: 'flex', justifyContent: 'center', color: '#fff', bgcolor: '#1CC7C1' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <AccessTimeIcon sx={{ fontSize: 60 }} />
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Typography variantr="h6" component="div">
                                        Opening Hours
                                    </Typography>
                                    <Typography variantr="body2" component="div" sx={{ fontSize: 13 }}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    {/* Location */}
                    <Grid item xs={12} sm={4} md={4}>
                        <Card sx={{ p: 4, display: 'flex', justifyContent: 'center', color: '#fff', bgcolor: '#3A4256' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <LocationOnIcon sx={{ fontSize: 60 }} />
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Typography variantr="h6" component="div">
                                        Visit our locatin
                                    </Typography>
                                    <Typography variantr="body2" component="div" sx={{ fontSize: 13 }}>
                                        Brooklyn, NY 10036, United States
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    {/* Phone Number */}
                    <Grid item xs={12} sm={4} md={4}>
                        <Card sx={{ p: 4, display: 'flex', justifyContent: 'center', color: '#fff', bgcolor: '#1CC7C1' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <PhoneIcon sx={{ fontSize: 60 }} />
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Typography variantr="h6" component="div">
                                        Contact us now
                                    </Typography>
                                    <Typography variantr="body2" component="div" sx={{ fontSize: 13 }}>
                                        +000 123 456789
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid >
            </Container>
        </Box >
    );
};

export default ContactInfo;