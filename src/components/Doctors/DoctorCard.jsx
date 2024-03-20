import React from 'react'
import { MdAddIcCall } from "react-icons/md";
import './doctor.css'
const DoctorCard = ({ doctor }) => {
    return (
        <div className='col-md-3 doctor-card'>
            <img src={doctor.image} className='img-fluid' alt={doctor.name} />
            <h6 className='fw-bold'>{doctor.name}</h6>
            <p><MdAddIcCall className='cm-color' /> {doctor.phone}</p>
        </div>
    )
}

export default DoctorCard