import React from "react"

import Layout from '../components/layout'
import Logo from '../components/logo/logo'
import Button from '../components/button/button'
import Contact from '../components/contact/contact'
import Head from '../components/head'









const IndexPage = () => {
    return (
        <Layout>
            <Head title='Home' />
            <Logo />
            <Button />
            <Contact />
        </Layout>
    )
}

export default IndexPage