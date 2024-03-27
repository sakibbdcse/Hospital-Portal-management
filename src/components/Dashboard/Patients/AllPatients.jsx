import React from 'react'
import ResentAppointments from '../ResentAppointments'
import Sidebar from '../Sidebar'
import '../dashboard.css'
const AllPatients = () => {
    return (
        <section className="Allpatients">
            <div className="container-fluid h-100 row">
                <div className="col-md-2 slide-bar h-100">
                    <Sidebar />
                </div>
                <div className="col-md-10 ">
                    <ResentAppointments />
                </div>
            </div>
        </section>
    )
}

export default AllPatients