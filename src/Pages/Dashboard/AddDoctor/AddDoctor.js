import React from 'react';
import { Button, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';

const AddDoctor = () => {

    return (
        <div>
            <h2>Add Doctors</h2>
            <form>
                <Box sx={{ width: '50%' }}>
                    <TextField
                        required
                        label="Name"
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        size="small"
                    />
                    <TextField
                        required
                        label="Email"
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        size="small"
                    />
                    <Input
                        accept="image/*"
                        type="file"
                    /> <br /><br />
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
            </form>
        </div>
    );
};

export default AddDoctor;