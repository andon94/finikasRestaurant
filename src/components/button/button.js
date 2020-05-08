import React from 'react'
import buttonStyles from './button.module.scss'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { BsChevronCompactDown } from "react-icons/bs";

const Button = () => {

    return (
        <div className={buttonStyles.buttonDiv}>
            <button className={buttonStyles.button} onClick={() => scrollTo('#c')}><BsChevronCompactDown /></button>
        </div>
    )
}

export default Button