import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '50px', margin: '0px auto' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;