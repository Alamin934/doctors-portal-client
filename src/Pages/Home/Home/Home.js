import React from 'react';
import Header from '../../Shared/Header/Header';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <AppointmentBanner />
        </div>
    );
};

export default Home;