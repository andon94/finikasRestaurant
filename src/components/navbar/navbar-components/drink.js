import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Drink = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItem(sort: { createdAt: ASC }) {
        edges {
          node {
            title
            slug
            type
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentfulMenuItem.edges.map(edge => {
        if (edge.node.type === "Drink") {
          return (
            <Link
              key={edge.node.slug}
              to={`/menu/${edge.node.slug}`}
              activeStyle={{ color: "red" }}
            >
              <p>{edge.node.title}</p>
            </Link>
          )
        }
        return null
      })}
    </div>
  )
}

export default Drink
