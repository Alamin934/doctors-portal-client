import React from 'react';
import Header from '../../Shared/Header/Header';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactInfo from '../ContactInfo/ContactInfo';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <ContactInfo />
            <Services />
            <DentalCare />
            <AppointmentBanner />
            <Testimonial />
            <Doctors />
        </div>
    );
};

export default Home;