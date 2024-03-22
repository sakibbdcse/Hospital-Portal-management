import React, { useState } from 'react'
import AppoinmentModal from './AppoinmentModal'
const BokingCard = ({ bokingAppoinment, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card appontment-card p-3">
                <div className="card-body text-center">
                    <h5 className="card-titile text-brand cm-color">{bokingAppoinment.subject}</h5>
                    <h6>{bokingAppoinment.visitingHours}</h6>
                    <h3><b>{bokingAppoinment.doctorName}</b></h3>
                    <small>{bokingAppoinment.specialization}</small>
                    <p>{bokingAppoinment.totalSpach} Available</p>
                    <button onClick={openModal} className='cm-color btn bg-primary '>Book APPOINMENT</button>
                    <AppoinmentModal modalIsOpen={modalIsOpen} appoinmentData={bokingAppoinment.subject} closeModal={closeModal} date={date} />
                </div>
            </div>
        </div>
    )
}

export default BokingCard