import React from 'react'
import Heder from '../../components/Heder/Heder'
import Service from '../../components/Service/Service'
import FeatureService from '../../components/FeatureService/FeatureService'
import MakeAppoinment from '../../components/MakeAppoinment/MakeAppoinment'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
    return (
        <>
            <Heder />
            <Service />
            <FeatureService />
            <MakeAppoinment />
            <Testimonial />
        </>
    )
}

export default Home