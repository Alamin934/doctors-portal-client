import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Registar = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const { registerUser, isLoading, user, authError } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = (e) => {

        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not match');
            return;
        }

        registerUser(loginData.email, loginData.password, history, loginData.name);

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Registar</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            label="Your Name"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="name"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            label="Your Email"
                            type="email"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            label="Your Password"
                            type="password"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="password"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            label="ReType Your Password"
                            type="password"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="password2"
                            onBlur={handleOnBlur}
                        />
                        <Button type="submit" sx={{ width: '100%' }} variant="contained">Registar</Button>
                        <NavLink to="/login">
                            <Button variant="text">Already have an Account? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user.email && <Alert severity="success">User Registraion Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: 'auto', height: '500px' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registar;