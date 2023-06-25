import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Navbar from "../components/navbar/navbar"
import BonApetit from "../components/bonapetit/bonapetit"
import SmallLogo from "../components/logo/smalllogo"
import Head from "../components/head"
import * as styles from "./menu.module.scss"

export const query = graphql`
  query ($slug: String!) {
    contentfulMenuItem(slug: { eq: $slug }) {
      title
      finikasMenu {
        Item
        Description
        Price
        id
      }
    }
  }
`

const Menu = props => {
  const getItems = data => {
    const itemsArray = []
    data.contentfulMenuItem.finikasMenu.forEach(item => {
      itemsArray.push(
        <div className={styles.item} key={item.id}>
          <div className={styles.food}>
            <div>{item.Item}</div>
            <div className={styles.description}>{item.Description}</div>
          </div>
          <div className={styles.price}>{item.Price} &euro;</div>
        </div>
      )
    })
    return itemsArray
  }

  return (
    <Layout>
      <Head />
      <SmallLogo />
      <Navbar />
      <div className={styles.container}>
        <div>{getItems(props.data)}</div>
      </div>
      <div className={styles.caption}>
        Some of the content may be outdated. Contact us for detailed
        information.
      </div>
      <BonApetit />
    </Layout>
  )
}

export default Menu
