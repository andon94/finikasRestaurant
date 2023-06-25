import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../components/styles/no.module.scss"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1 className={styles.content}>Page not found</h1>
      <p className={styles.content}>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
