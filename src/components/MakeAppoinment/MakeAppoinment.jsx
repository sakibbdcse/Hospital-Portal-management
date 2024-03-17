import React from 'react'
import doctorAppointment from '../../assets/images/doctor.png'
import Button from '../Button/Button'
import './makeAppoinment.css'
const MakeAppoinment = () => {
    return (
        <section>
            <div className="container Make-appoinment">
                <div className="row">
                    <div className="col-md-5 d-done d-md-block">
                        <img src={doctorAppointment} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 indexing text-white py-5">
                        <h5>Appoinment</h5>
                        <h1 className='my-4'>Make an Doctor Appointment</h1>
                        <p>make appoinment first and heppy to helthy life .</p>
                        <Button link='/' value='Book Now' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MakeAppoinment