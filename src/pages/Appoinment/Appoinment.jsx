import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Heder/Navbar'
import AppoinmentHero from '../../components/Appoinment/AppoinmentHero'
import BokingAppointmnet from '../../components/Appoinment/BokingAppointmnet';
const Appoinment = () => {
    const [SelectedDate, SetSelectedDate] = useState(new Date());
    const onchangeHandaleDate = date => {
        SetSelectedDate(date)
    }
    return (
        <div className='appoinment'>
            <Navbar />
            <AppoinmentHero onchangeHandaleDate={onchangeHandaleDate} />
            <BokingAppointmnet bokingAppoinmentDate={SelectedDate} />
            <Footer />
        </div>
    )
}

export default Appoinment