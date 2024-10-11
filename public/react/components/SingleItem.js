import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cart'
import Cart from './Cart'


const SingleItem = ({item, setView, editItem, deleteItem})=>{  
    
    const { cartItems, addToCart } = useContext(CartContext)

    return <div className="singleItem">

   <div className="singleItem_buttons">
    <button onClick={()=> setView('addItem')}>Add Item</button>
    <button onClick={()=> setView('updateItem')}>Update Item</button>
    <button onClick={()=> deleteItem(item.id)}>Delete Item</button>
   </div>
   <div className="singleItemInfo">
        <h3>{item.name}</h3>
        <img src={item.image}/>
        <p><i>{item.description}</i></p>
       <div className='innerItem' > 
        <p className='price-tag'><strong>${item.price}</strong></p>
         {/* need to add to cart */}
        <button onClick={()=> addToCart(item)}>Add to Cart </button>
        </div>
   </div>
    </div>
}

export default SingleItem;