import React from 'react';
import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';

const MakeAdmin = () => {

    return (
        <div>
            <h2>Make Admin</h2>
            <Box style={{ width: "400px", margin: '0px auto' }}>
                <form>
                    <TextField
                        label="Email"
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        size="small"
                        name="email"
                    />
                    <Button type="submit" variant="contained">Make Admin</Button>
                </form>
                <Alert sx={{ mt: 3 }} severity="success">Made Admin Successfully</Alert>
            </Box>
        </div>
    );
};

export default MakeAdmin;