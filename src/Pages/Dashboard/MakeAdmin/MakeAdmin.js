import React from 'react';
import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Make Admin</h2>
            <Box style={{ width: "400px", margin: '0px auto' }}>
                <form onSubmit={handleSubmit}>
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