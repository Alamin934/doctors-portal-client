import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    let { admin, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) { return <CircularProgress sx={{ textAlign: 'center' }}></CircularProgress> }

    if (!admin) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default AdminRoute;