import React from 'react'
import heroImage from '../../assets/images/chair.png'
import './appoinment.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const AppoinmentHero = ({ onchangeHandaleDate, index }) => {

    return (
        <main className='appoinment-hero-info'>
            <div className="row hero align-items-center">
                <div className="col-md-4 offset-1">
                    <h1>Appoinment</h1>
                    <Calendar
                        key={index}
                        onChange={onchangeHandaleDate}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <img src={heroImage} alt="cheir" className="img-fluid" />
                </div>
            </div>
        </main>
    )
}

export default AppoinmentHero