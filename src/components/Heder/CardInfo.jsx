import React from 'react'
import './heder.css'
const CardInfo = ({ info }) => {
    return (
        <div className='col-md-4 align-item-center'>
            <div className={`d-flex info info-${info.bgColor}  justify-content-center`}>
                <div className='info-icon m-2'>
                    {info.icon}
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.discription}</small>
                </div>
            </div>
        </div>
    )
}

export default CardInfo