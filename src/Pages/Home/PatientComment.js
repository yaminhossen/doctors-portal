import React from 'react';

const PatientComment = ({ patient }) => {
    return (
        <section className='shadow-xl p-3 rounded-lg'>
            <div>
                <p>{patient.descrip}</p>
            </div>
            <div className='flex  items-center mt-4'>
                <div className='w-16 rounded-full ring ring-primary ring-offset-base-100'>
                    <img src={patient.img} alt="" />
                </div>
                <div className='ml-4'>
                    <h2>{patient.name}</h2>
                    <p>{patient.city}</p>
                </div>
            </div>
        </section>
    );
};

export default PatientComment;