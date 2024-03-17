import React from 'react'
import { FaClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import CardInfo from './CardInfo';

const BuisnessInfo = [
    {
        title: "Opening Hours",
        discription: "Opening Hours is 24 Hours in 7 days",
        icon: <FaClock />,
        bgColor: "grayPrimary",
    },
    {
        title: "Visit Our Hospital",
        discription: "Dhaka, Bnagladash",
        icon: <CiLocationOn />,
        bgColor: "grayDark",
    },
    {
        title: "Contact Us",
        discription: "+880177777770",
        icon: <MdAddCall />,
        bgColor: "grayPrimary",
    },
]
const BuisnessInfoCard = () => {
    return (
        <section className='w-100 d-flex justify-content-center'>
            <div className="w-75 row">
                {BuisnessInfo.map(info => <CardInfo info={info} />)}
            </div>
        </section>
    )
}

export default BuisnessInfoCard