import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Service from '../Home/Service';
import Loading from '../Shared/Loading';
import AppoService from './AppoService';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatement] = useState(null);

    const formatedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['avilable', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formatedDate])
    return (
        <div>
            <h2 className='text-secondary text-xl text-center'>Available Appointments on: {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppoService
                        key={service._id}
                        service={service}
                        setTreatement={setTreatement}
                        refetch={refetch}
                    ></AppoService>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatement={setTreatement}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;