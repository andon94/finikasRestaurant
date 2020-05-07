import React from 'react'
import contactStyle from './contact.module.scss'

const Contact = () =>{
    return (
        <div className={contactStyle.contactDiv} id='c'>
            <div className={contactStyle.font}>Welcome</div>
            <div>We are located across the Golden Beach Camp</div>
            <div className={contactStyle.padding}>
                <a href="https://goo.gl/maps/jjmFeDqTdaT9kctv7" target="blank">Find us on a map</a>
            </div>
            <div>
                <p>Working Hours:</p> 
                <p className={contactStyle.color}>from 12:00 to 00:00</p>
            </div>
            <div>
                <p>Telephone:</p>
                <p className={contactStyle.color}>+30 2593 061420</p> 
            </div>
            <div className={contactStyle.padding}>
                <p>E-mail:</p> 
                <p className={contactStyle.color}>finikas01@gmail.com</p>
            </div>
            <div>Call us to make a reservation or order takeaway!</div>
            {/* <p className={contactStyle.small}>prices for takeaway may differ from the prices inside the restaurant</p> */}

        </div>
    )
}

export default Contact