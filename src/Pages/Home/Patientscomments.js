import React from 'react';
import patient1 from '../../assets/images/people1.png'
import patient2 from '../../assets/images/people2.png'
import patient3 from '../../assets/images/people3.png'
import PatientComment from './PatientComment';
import quote from '../../assets/icons/quote.svg';

const Patientscomments = () => {
    const patients = [
        {
            _id: 1,
            name: 'Winson Henry',
            img: patient1,
            descrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto quis maxime doloribus suscipit! Illo eius maxime quaerat est.',
            city: 'California'
        },
        {
            _id: 2,
            name: 'Jenson Henry',
            img: patient2,
            descrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto quis maxime doloribus suscipit! Illo eius maxime quaerat est.',
            city: 'California'
        },
        {
            _id: 3,
            name: 'Jackson Henry',
            img: patient3,
            descrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto quis maxime doloribus suscipit! Illo eius maxime quaerat est.',
            city: 'California'
        }
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='mt-12 text-primary font-bold'>Testimonial</h2>
                    <h2 className='font-semibold text-3xl'>What Our Patient Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 px-5 lg:grid-cols-3 gap-12 px-20 mt-28 mb-12'>
                {
                    patients.map(patient => <PatientComment
                        key={patient._id}
                        patient={patient}
                    ></PatientComment>)
                }
            </div>
        </section>
    );
};

export default Patientscomments;