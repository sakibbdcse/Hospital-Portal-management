import React from 'react'
import './button.css'
const Button = (btnInfo) => {
    return (
        <button type='button' className='btn bg-primary text-uppercase'><a href={btnInfo.link}>{btnInfo.value}</a></button>
    )
}

export default Button