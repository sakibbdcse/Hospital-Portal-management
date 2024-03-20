import React from 'react'
import ContactFrom from './ContactFrom'
export const Contact = () => {
    return (
        <section className='contact-section my-5'>
            <div className="container">
                <div className="row text-center">
                    <h5 className='cm-color'>Contact Us</h5>
                    <h1>Always Contact with us</h1>
                    <ContactFrom />
                </div>
            </div>
        </section>
    )
}
