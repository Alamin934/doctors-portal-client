import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    const style = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <NavLink style={style} to="/home">
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink style={style} to="/appointment">
                        <Button color="inherit">Appointment</Button>
                    </NavLink>
                    {
                        !user.email ?
                            <NavLink style={style} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                            :
                            <Box>
                                <NavLink style={style} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button color="inherit" onClick={logOut}>Logout</Button>
                                <span sx={{ marginLeft: '10px' }}>{user?.displayName}</span>
                            </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;