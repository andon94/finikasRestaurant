import React from 'react'
import buttonStyles from './button.module.scss'
// import Link from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';

const Button = () =>{

    return (
        <div className={buttonStyles.buttonDiv}>
            <button className={buttonStyles.button} onClick={() => scrollTo('#c')}>More</button>
        </div>
    )
}

export default Button