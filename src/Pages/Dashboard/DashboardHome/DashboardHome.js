import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {

    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Box>
                <Grid container spacing={2}>
                    <Grid item sx={12} md={4}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item sx={12} md={8}>
                        <Appointments date={date}></Appointments>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default DashboardHome;