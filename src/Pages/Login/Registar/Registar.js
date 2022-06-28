import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Registar = () => {
    const [registrationData, setRegistrationData] = React.useState({});
    const { userRegistration, isLoading, user, authError } = useAuth();
    let navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData };
        newRegistrationData[field] = value;
        setRegistrationData(newRegistrationData);
    }


    const handleRegistrationSubmit = (e) => {
        if (registrationData.password !== registrationData.password2) {
            alert('password does not mathched');
            return;
        }
        userRegistration(registrationData.email, registrationData.password, registrationData.name, navigate);
        e.preventDefault();
    }

    //Alert Hidden
    // const alertHide = setTimeout(() => { document.getElementById('alert').style.display = 'none' }, 5000);

    return (
        <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center', marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Registar</Typography>
                    {!isLoading && <form onSubmit={handleRegistrationSubmit}>
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
                    {isLoading && <CircularProgress sx={{ textAlign: 'center', display: 'block' }} />}
                    {user?.email && <Alert id="alert" severity="success">User Registraion Successfully</Alert>}
                    {authError && <Alert id="alert" severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: 'auto', height: '500px' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registar;