import React from 'react'
import doctor1 from '../../assets/images/doctor.png'
import DoctorCard from './DoctorCard'
const DoctorInfo = [
    {
        name: 'Dr.Sakib',
        image: doctor1,
        phone: '+880172222222'
    },
    {
        name: 'Dr.Elon Mask',
        image: doctor1,
        phone: '+880172222222'
    },
    {
        name: 'Dr.Jakir',
        image: doctor1,
        phone: '+880172222222'
    },
]
const Doctors = () => {
    return (
        <section className='my-5'>
            <div className="container">
                <div className="row text-center justify-content-around">
                    <h6 className='cm-color'>Our Doctros</h6>
                    {DoctorInfo.map(doctor => <DoctorCard doctor={doctor} />)}
                </div>
            </div>
        </section>
    )
}

export default Doctors