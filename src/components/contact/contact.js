import React from "react"
import * as styles from "./contact.module.scss"
import { FaTripadvisor } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"

const Contact = () => {
  return (
    <div className={styles.contactDiv} id="c">
      <div className={styles.font}>
        <h1>Welcome to Finikas Restaurant</h1>
      </div>
      <div>
        <h2>The restaurant is located across the Thassos, Golden Beach Camp</h2>
      </div>
      <div className={styles.padding}>
        <a href="https://goo.gl/maps/jjmFeDqTdaT9kctv7" target="blank">
          Find us on a map
        </a>
      </div>
      <div>
        <p>Working Hours:</p>
        <p className={styles.color}>from 12:00 to 23:30</p>
      </div>
      <div>
        <p>Telephone:</p>
        <p className={styles.color}>+30 2593 061420</p>
      </div>
      <div>
        <p>E-mail:</p>
        <p className={styles.color}>finikas01@gmail.com</p>
      </div>
      <div>
        <a
          className={styles.soc}
          href="https://www.tripadvisor.rs/Restaurant_Review-g775840-d2177225-Reviews-Finikas-Golden_Beach_Thasos_Northeast_Aegean_Islands.html"
          target="blank"
        >
          <FaTripadvisor size={42} />
        </a>
        <a
          className={styles.soc}
          href="https://www.facebook.com/Taverna-finikas-thassos-1400909270191114/"
          target="blank"
        >
          <FaFacebookF size={42} />
        </a>
      </div>
      <div>
        <h2>Call us to make a reservation or order takeaway!</h2>
      </div>
    </div>
  )
}

export default Contact
