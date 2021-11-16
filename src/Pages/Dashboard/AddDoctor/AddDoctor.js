import { Button, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://shielded-sea-24899.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error', error)
            })
    }

    return (
        <div>
            <h2>Add Doctors</h2>
            <form onSubmit={handleSubmit}>
                <Box sx={{ width: '50%' }}>
                    <TextField
                        required
                        label="Name"
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        size="small"
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        required
                        label="Email"
                        sx={{ width: '100%', mb: 2 }}
                        id="outlined-size-small"
                        size="small"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        onChange={e => setImage(e.target.files[0])}
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