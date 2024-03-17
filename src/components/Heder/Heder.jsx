import React from 'react'
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import BuisnessInfoCard from './BuisnessInfoCard';

const Heder = () => {
    return (
        <div className='all-hero-bg'>
            <Navbar />
            <MainMenu />
            <BuisnessInfoCard />
        </div>
    )
}

export default Heder