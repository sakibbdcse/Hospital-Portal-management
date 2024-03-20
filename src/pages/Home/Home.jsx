import React from 'react'
import Heder from '../../components/Heder/Heder'
import Service from '../../components/Service/Service'
import FeatureService from '../../components/FeatureService/FeatureService'
import MakeAppoinment from '../../components/MakeAppoinment/MakeAppoinment'
import Testimonial from '../../components/Testimonial/Testimonial'
import Blog from '../../components/Blog/Blog'
import Doctors from '../../components/Doctors/Doctors'
import { Contact } from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Heder />
            <Service />
            <FeatureService />
            <MakeAppoinment />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </>
    )
}

export default Home