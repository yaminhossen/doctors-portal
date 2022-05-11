import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Home/Service';
import AppoService from './AppoService';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({ date, setDate }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatement] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className='text-secondary text-xl text-center'>Available Appointments on: {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppoService
                        key={service._id}
                        service={service}
                        setTreatement={setTreatement}
                    ></AppoService>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;