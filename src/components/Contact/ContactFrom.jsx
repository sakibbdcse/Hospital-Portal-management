import React from 'react'
import './contact.css'
const ContactFrom = () => {
    return (
        <form>
            <div className='form-group m-3'>
                <input type="email" placeholder='Enter your Email Address' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className='form-group m-3'>
                <input type="text-area" placeholder='Subject' className="form-control" id="exampleInputPassword1" />
            </div>
            <div className='form-group m-3'>
                <input type="text-area" placeholder='Enter Your Message' className="form-control p-5" id="exampleInputPassword1" />
            </div>
        </form>
    )
}

export default ContactFrom