import React from 'react';
import Header from '../../Shared/Header/Header';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactInfo from '../ContactInfo/ContactInfo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <ContactInfo />
            <Services />
            <AppointmentBanner />
        </div>
    );
};

export default Home;