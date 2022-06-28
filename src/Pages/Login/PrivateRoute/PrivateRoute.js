import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) { return <CircularProgress sx={{ textAlign: 'center' }}></CircularProgress> }

    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;