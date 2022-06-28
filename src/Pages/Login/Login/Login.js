import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = React.useState({});
    const { user, userLogin, isLoading, authError, signInWithGoogle } = useAuth();
    let location = useLocation();
    let navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }


    const handleLoginSubmit = e => {
        userLogin(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInWithGoogle(location, navigate);
    }

    return (
        <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            label="Your Email"
                            type="email"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="email"
                            onBlur={handleOnChange}
                        />
                        <TextField
                            label="Your Password"
                            type="password"
                            sx={{ width: '100%', mb: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="password"
                            onBlur={handleOnChange}
                        />
                        <Button type="submit" sx={{ width: '100%' }} variant="contained">Login</Button>
                        <NavLink to="/registar">
                            <Button variant="text">New User? Please Registar</Button>
                        </NavLink>
                        {isLoading && <CircularProgress sx={{ textAlign: 'center' }} />}
                        {user?.email && <Alert severity="success">User Login Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>-------------------</p>
                    <Button variant="contained" onClick={handleGoogleLogin}>Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: 'auto', height: '500px' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;