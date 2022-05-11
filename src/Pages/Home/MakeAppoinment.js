import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nostrum, assumenda neque officia quaerat ullam maxime rerum et voluptas aut odio eaque nemo libero reiciendis asperiores exercitationem placeat reprehenderit nisi.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;