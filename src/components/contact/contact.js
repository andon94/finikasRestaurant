import React from 'react'
import contactStyle from './contact.module.scss'

import { FaTripadvisor } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';


const Contact = () => {
    return (
        <div className={contactStyle.contactDiv} id='c'>
            <div className={contactStyle.font}>Welcome to Finikas Restaurant</div>
            <div>The restaurant is located across the Thassos, Golden Beach Camp</div>
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
            <div>
                <p>E-mail:</p>
                <p className={contactStyle.color}>finikas01@gmail.com</p>
            </div>
            <div>
                <a className={contactStyle.soc} href="https://www.tripadvisor.rs/Restaurant_Review-g775840-d2177225-Reviews-Finikas-Golden_Beach_Thasos_Northeast_Aegean_Islands.html" target='blank'><FaTripadvisor size={42} /></a>
                <a className={contactStyle.soc} href="https://www.facebook.com/Taverna-finikas-thassos-1400909270191114/" target='blank'><FaFacebookF size={42} /></a>

            </div>
            <div>Call us to make a reservation or order takeaway!</div>
            {/* <p className={contactStyle.small}>prices for takeaway may differ from the prices inside the restaurant</p> */}

        </div>
    )
}

export default Contact