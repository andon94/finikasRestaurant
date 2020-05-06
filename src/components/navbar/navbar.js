import React from 'react'

import navbarStyle from './navbar.module.scss'
import Food from './navbar-components/food'
import Drink from './navbar-components/drink'



const Navbar = () =>{

    return(
        <div className={navbarStyle.nav}>
            <Food />
            <Drink />
        </div>
    )
                
}

export default Navbar