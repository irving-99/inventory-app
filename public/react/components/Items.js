import React from 'react';

export const Item = ({item, fetchSingleItem}) => {
  return <div onClick={()=> fetchSingleItem(item.id)} className='product'>
    <img src={item.image}/>
    <div>
      <h5>{item.name}</h5>
      <p>Price: ${item.price}</p>
    </div>
  </div>
} 
	