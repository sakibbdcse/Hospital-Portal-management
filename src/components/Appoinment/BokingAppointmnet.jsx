import React from 'react';
import BokingCard from './BokingCard';

const BokingAppointmnet = ({ bokingAppoinmentDate }) => {
    const BokindInfo = [
        {
            subject: 'Teeth Orthodontics',
            visitingHours: '8:30 AM - 9:30 PM',
            doctorName: 'Dr. John Doe',
            specialization: 'Dentist',
            totalSpach: '10',
        },
        {
            subject: 'Teeth Orthodontics',
            visitingHours: '8:30 AM - 9:30 PM',
            doctorName: 'Dr. John Doe',
            specialization: 'Dentist',
            totalSpach: '10',
        },
        {
            subject: 'Cosmetic Dentistry',
            visitingHours: '8:30 AM - 9:30 PM',
            doctorName: 'Dr. John Doe',
            specialization: 'Dentist',
            totalSpach: '10',
        },
        {
            subject: 'Teeth Orthodontics',
            visitingHours: '8:30 AM - 9:30 PM',
            doctorName: 'Dr. John Doe',
            specialization: 'Dentist',
            totalSpach: '10',
        },
        {
            subject: 'Teeth Orthodontics',
            visitingHours: '8:30 AM - 9:30 PM',
            doctorName: 'Dr. John Doe',
            specialization: 'Dentist',
            totalSpach: '10',
        },
        {
            subject: 'Cosmetic Dentistry',
            visitingHours: '8:30 AM - 9:30 PM',
            doctorName: 'Dr. John Doe',
            specialization: 'Dentist',
            totalSpach: '10',
        },
    ];

    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <h1 className='cm-color text-center'>Available Appointments Date: {bokingAppoinmentDate.toDateString()}</h1>
                    {BokindInfo.map(bokingAppoinment => (
                        <BokingCard key={bokingAppoinment.subject} bokingAppoinment={bokingAppoinment} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BokingAppointmnet;
