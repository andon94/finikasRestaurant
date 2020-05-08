import React from 'react'

import Header from './header'
import Footer from './footer'

import layoutStyles from './styles/layout.module.scss'
// import MobileHeader from './mobileheader'

const Layout = (props) => {




    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                {/* <MobileHeader /> */}
                <Header />

                <div>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout