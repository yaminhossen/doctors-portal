import React from 'react';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const ContactUs = () => {
    return (
        <div style={{
            background: `url(${appoinment})`
        }} className=' '>
            <div className=''>
                <h2 className='text-primary font-bold pt-12 text-center'>Contact Us</h2>
                <p className='text-3xl text-white text-center pb-10'>Stay Connect With us</p>
                <form className='pb-4 text-center'>
                    <input className='pl-3  mb-4 bg-white rounded-lg p-1' type="email" name="email" placeholder='Email Address' id="" />
                    <br />
                    <input className='pl-3 mb-4 bg-white rounded-lg p-1' type="text" name="text" placeholder='Subject' id="" />
                    <br />
                    <input className='pl-3 mb-4 bg-white pb-20 p-1 rounded-lg' type="text" name="text" placeholder='Your message' id="" />
                    <br />
                    <PrimaryButton>submit</PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;