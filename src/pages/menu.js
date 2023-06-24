import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar/navbar"
import Enjoy from "../components/enjoy/enojoy"
import Head from "../components/head"
import Special from "../components/special/special"

const Menu = () => {
  return (
    <Layout>
      <Head title="Menu | Finikas Restaurant" />
      <Navbar />
      <Special />
      <Enjoy />
    </Layout>
  )
}

export default Menu
