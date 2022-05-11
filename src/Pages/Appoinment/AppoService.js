import React from 'react';

const AppoService = ({ service, setTreatement }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center ">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slot Available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length == 0}
                        onClick={() => setTreatement(service)}
                        class="btn btn-sm btn-secondary text-white bg-gradient-to-r from-secondary to-primary ">Booking Appoinment

                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppoService;