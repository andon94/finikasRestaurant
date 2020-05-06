import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './styles/header.module.scss'



const Header = () =>{


    return (
        <header className={headerStyles.header}>
            {/* <h1 className={headerStyles.title}>{data.site.siteMetadata.title}</h1> */}
            <nav>
                <ul className={headerStyles.ulist}>
                    <li>
                        <Link 
                        to="./"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="./menu/"
                        >
                            Menu
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header