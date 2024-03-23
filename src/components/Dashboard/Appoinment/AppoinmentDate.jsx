import React from 'react'

const AppoinmentDate = () => {
    return (
        <div class="table-responsive appoinment-date">
            <div className="ap-heading d-flex justify-content-around">
                <p className='cm-color fw-bold cm-color'>Appoinments</p>
                <p className='text-right text-dark'>7/9/2022</p>
            </div>
            <table class="table">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">Name</th>
                        <th scope="col">Schedule</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center'>
                        <td>Sakib</td>
                        <td>7:00 pm</td>
                        <td>
                            <select className='form-control bg-primary text-center'>
                                <option value="not-visited" >Not visited</option>
                                <option value="visited" >visited</option>
                            </select>
                        </td>
                    </tr>
                    <tr className='text-center'>
                        <td>Sakib</td>
                        <td>7:00 pm</td>
                        <td>
                            <select className='form-control bg-primary text-center'>
                                <option value="not-visited" >Not visited</option>
                                <option value="visited" >visited</option>
                            </select>
                        </td>
                    </tr>
                    <tr className='text-center'>
                        <td>Sakib</td>
                        <td>7:00 pm</td>
                        <td>
                            <select className='form-control bg-primary text-center'>
                                <option value="not-visited" >Not visited</option>
                                <option value="visited" >visited</option>
                            </select>
                        </td>
                    </tr>
                    <tr className='text-center'>
                        <td>Sakib</td>
                        <td>7:00 pm</td>
                        <td>
                            <select className='form-control bg-primary text-center'>
                                <option value="not-visited" >Not visited</option>
                                <option value="visited" >visited</option>
                            </select>
                        </td>
                    </tr>
                    <tr className='text-center'>
                        <td>Sakib</td>
                        <td>7:00 pm</td>
                        <td>
                            <select className='form-control bg-primary text-center'>
                                <option value="not-visited" >Not visited</option>
                                <option value="visited" >visited</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AppoinmentDate