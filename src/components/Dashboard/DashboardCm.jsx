import React from 'react'
import Sidebar from './Sidebar'
import './dashboard.css'
const DashboardCm = () => {
    const ScheduleCard = [
        {
            total: "10",
            title: "Panding Appoinmnets",
            color: "black",
        },
    ]
    return (
        <section className='deshboard-appoinments'>
            <div className="container-fluid h-100 row">
                <div className="col-md-2 slide-bar">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h3 className='fw-bold'>Dashboard</h3>
                    <div className="row">
                        {ScheduleCard.map(info => (
                            <div className="col-md-3 m-1 rounded text-light text-center bg-black">
                                <b className='fs-1'>{info.total}</b>
                                <p className='m-2 p-2'>{info.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardCm