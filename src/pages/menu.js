import React from "react"

import Layout from '../components/layout'
import Navbar from '../components/navbar/navbar'
import Enjoy from '../components/enjoy/enojoy'
import Head from '../components/head'


const Menu = () =>{
    return (
        <Layout>
            <Head title='Menu'/>
            <Navbar />    
            <Enjoy /> 
        </Layout>
    )
}

export default Menu