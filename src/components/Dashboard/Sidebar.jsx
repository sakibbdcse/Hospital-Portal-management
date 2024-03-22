import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { MdDateRange } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { LuFileTerminal } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import './dashboard.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className=''>
            <Link rel="stylesheet" to="/dashboard" className='text-light fs-5' ><RxDashboard className='fs-5' /><b className='m-2'>Dashboard</b></Link><br /><br />
            <Link rel="stylesheet" to="/appoinment" className='text-light fs-5' ><MdDateRange className='fs-5' /><b className='m-2'>Appoinment</b></Link><br /><br />
            <Link rel="stylesheet" to="/patients" className='text-light fs-5' ><FaUserFriends className='fs-5' /><b className='m-2'>Patients</b></Link><br /><br />
            <Link rel="stylesheet" to="/prescriptios" className='text-light fs-5' ><LuFileTerminal className='fs-5' /><b className='m-2'>Prescriptios</b></Link><br /><br />
            <Link rel="stylesheet" to="/settings" className='text-light fs-5' ><IoSettingsOutline className='fs-5' /><b className='m-2'>Settings</b></Link><br /><br />
        </div>
    )
}

export default Sidebar