import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import navbarStyle from '../navbar.module.scss'


const Food = () =>{

    const data = useStaticQuery(graphql`
        query {
            allContentfulMenuItem(sort: {fields: createdAt, order:ASC}) {
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
                <div className={navbarStyle.navFood}>
                    {
                        data.allContentfulMenuItem.edges.map((edge)=>{   
                            
                            if(edge.node.type === 'Food'){
                                return (
                                   
                                        <Link key={edge.node.slug} to={`/menu/${edge.node.slug}`} activeStyle={{ color: "red" }}>
                                            <p className={navbarStyle.navItem}>{edge.node.title}</p>
                                        </Link>
                                )
                            }
            
                        })
                    }
                </div>
    )
}

export default Food