import React from 'react'

import Layout from '../components/layout'
import Navbar from '../components/navbar/navbar'
import BonApetit from '../components/bonapetit/bonapetit'


import itemStyles from  './menu.module.scss'


export const query = graphql`
    query($slug: String!){
        contentfulMenuItem(slug: {eq: $slug}){
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




const Menu = (props) =>{

    const getItems = data =>{
        const itemsArray = [];
        data.contentfulMenuItem.finikasMenu.forEach(item =>{
        itemsArray.push(
            <div className={itemStyles.item} key={item.id}>
                <div className={itemStyles.food}>
                    <div>{item.Item}</div>
                    <div className={itemStyles.description}>{item.Description}</div>
                </div>    
                <div className={itemStyles.price}>{item.Price} &euro;</div>
            </div>)
        })
        return itemsArray;
    }

    return (
        <Layout>
            <Navbar />
            <div className={itemStyles.container}>
                <p>{getItems(props.data)}</p>
            </div>
            <BonApetit>Bon Apetit!</BonApetit>
        </Layout>
    )
}


export default Menu