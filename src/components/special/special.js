import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./special.module.scss"

const Special = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMenuItem(slug: { eq: "daily_special" }) {
        title
        slug
        type
        finikasMenu {
          Item
          Soup
          Desert
          Drink
          Price
          id
        }
      }
    }
  `)

  const title = data.contentfulMenuItem.title

  const getItems = data => {
    const itemsArray = []
    data.contentfulMenuItem.finikasMenu.forEach(item => {
      itemsArray.push(
        <div key={item.id}>
          <div>{item.Item}</div>
          <div>{item.Soup}</div>
          <div>{item.Desert}</div>
          <div>{item.Drink}</div>
          <div className={styles.price}>
            <p>{item.Price} &euro;</p>
          </div>
          <div className={styles.update}>
            -The Daily Specials are updated at around noon every day and are not
            available for takeaway-
          </div>
        </div>
      )
    })
    return itemsArray
  }

  return (
    <div className={styles.container}>
      <h1>-{title}-</h1>
      <div className={styles.items}>{getItems(data)}</div>
    </div>
  )
}

export default Special
