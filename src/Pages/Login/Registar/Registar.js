import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Registar = () => {


    const handleLoginSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Registar</Typography>
                    isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            label="Your Name"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="name"
                        />
                        <TextField
                            label="Your Email"
                            type="email"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="email"
                        />
                        <TextField
                            label="Your Password"
                            type="password"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="password"
                        />
                        <TextField
                            label="ReType Your Password"
                            type="password"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="password2"
                        />
                        <Button type="submit" sx={{ width: '100%' }} variant="contained">Registar</Button>
                        <NavLink to="/login">
                            <Button variant="text">Already have an Account? Please Login</Button>
                        </NavLink>
                    </form>
                    {/* <CircularProgress />
                    <Alert severity="success">User Registraion Successfully</Alert>
                    <Alert severity="error"></Alert> */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: 'auto', height: '500px' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registar;