import React from 'react'
import './dashboard.css'
const ResentAppointments = () => {
    return (
        <div className='row my-3 p-1'>
            <h4 className='cm-color m-1'>ResentAppointments</h4>
            <table class="table">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Prescriptions</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center'>
                        <td>01</td>
                        <td>01-10-2020</td>
                        <td>9:30 pm</td>
                        <td>Sakib</td>
                        <td>+880176666</td>
                        <td>
                            <button className="btn bg-primary text-uppercase">View</button>
                        </td>
                        <td>
                            <select className='form-control bg-primary text-center'>
                                <option value="not-visited" >Padding</option>
                                <option value="visited" >Success</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResentAppointments