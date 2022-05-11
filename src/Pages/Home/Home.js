import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Patientscomments from './Patientscomments';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Patientscomments></Patientscomments>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;