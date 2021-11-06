import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import people1 from '../../../images/people-1.png';

const Testimonial = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Container>
                <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" component="div" sx={{ color: '#1CC7C1', fontWeight: 'bold', mb: 1 }}>
                        TESTIMONIAL
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ fontWeight: '500' }}>
                        What's Our Patients<br />Says
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="body2" component="div" sx={{ mb: 3, color: 'text.secondary', textAlign: 'justify' }}>
                                It is a long established fact that a reader will be distracted byb the readable content of a page when looking at its layout. the point of using Lorem Ipsumis that is
                            </Typography>
                            <Box sx={{ display: 'flex', mt: 5, alignItems: 'center' }}>
                                <img src={people1} alt="" style={{ width: '50px', marginRight: '20px' }} />
                                <Box>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', color: '#1CC7C1' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography variant="caption" component="div">
                                        California
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="body2" component="div" sx={{ mb: 3, color: 'text.secondary', textAlign: 'justify' }}>
                                It is a long established fact that a reader will be distracted byb the readable content of a page when looking at its layout. the point of using Lorem Ipsumis that is
                            </Typography>
                            <Box sx={{ display: 'flex', mt: 5, alignItems: 'center' }}>
                                <img src={people1} alt="" style={{ width: '50px', marginRight: '20px' }} />
                                <Box>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', color: '#1CC7C1' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography variant="caption" component="div">
                                        California
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="body2" component="div" sx={{ mb: 3, color: 'text.secondary', textAlign: 'justify' }}>
                                It is a long established fact that a reader will be distracted byb the readable content of a page when looking at its layout. the point of using Lorem Ipsumis that is
                            </Typography>
                            <Box sx={{ display: 'flex', mt: 5, alignItems: 'center' }}>
                                <img src={people1} alt="" style={{ width: '50px', marginRight: '20px' }} />
                                <Box>
                                    <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', color: '#1CC7C1' }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography variant="caption" component="div">
                                        California
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;