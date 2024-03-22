import React from 'react'
import Sidebar from './Sidebar'
import Calander from './Calander'
import AppoinmentDate from './AppoinmentDate'

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-5">
                    <Calander />
                </div>
                <div className="col-md-5">
                    <AppoinmentDate />
                </div>
            </div>
        </section>
    )
}

export default Dashboard