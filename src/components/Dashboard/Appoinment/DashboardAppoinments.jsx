import React from 'react'
import AppoinmentDate from './AppoinmentDate'
import '../dashboard.css'
import Sidebar from '../Sidebar'
import Calander from './Calander'
const DashboardAppoinments = () => {
    return (
        <section className='deshboard-appoinments'>
            <div className="container-fluid h-100 row">
                <div className="col-md-2 slide-bar">
                    <Sidebar />
                </div>
                <div className="col-md-5">
                    <h3 className='fw-bold'>Appoinment</h3>
                    <Calander />
                </div>
                <div className="col-md-5">
                    <AppoinmentDate />
                </div>
            </div>
        </section>
    )
}

export default DashboardAppoinments