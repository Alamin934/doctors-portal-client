import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { token } = useAuth();

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://shielded-sea-24899.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <Box style={{ width: "400px", margin: '0px auto' }}>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        label="Email"
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        size="small"
                        name="email"
                        onBlur={handleOnBlur}
                    />
                    <Button type="submit" variant="contained">Make Admin</Button>
                </form>
                {success && <Alert sx={{ mt: 3 }} severity="success">Made Admin Successfully</Alert>}
            </Box>
        </div>
    );
};

export default MakeAdmin;