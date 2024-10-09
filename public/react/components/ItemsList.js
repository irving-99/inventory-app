import React from 'react';
import { Item } from './Items';
import SingleItem from '../components/SingleItem';

export const ItemsList = ({setView,items, item, setItem, fetchSingleItem, editItem, deleteItem}) => {

	return <div className='items'>
	<div>
		<button onClick={()=> setView('addItem')}>Add Item</button>
		<div className='item'>
			{
				items.map((item, idx) => {
					return <Item setItem={setItem} fetchSingleItem={fetchSingleItem} item={item} key={idx} />
				})
			}
		</div>
	</div>
	<SingleItem item={item} editItem={editItem} deleteItem={deleteItem}/>
	</div>
} 
