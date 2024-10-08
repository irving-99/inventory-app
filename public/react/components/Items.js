import React from 'react';

export const Item = ({item, fetchSingleItem}) => {
  return <div onClick={()=> fetchSingleItem(item.id)} className='product'>
    <h5>{item.name}</h5>
  </div>
} 
	