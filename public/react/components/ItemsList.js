import React from 'react';
import { Item } from './Items';
import SingleItem from '../components/SingleItem';

export const ItemsList = ({setView,items, item, setItem, fetchSingleItem, deleteItem, editItem, searchItem, setSearchItem, handleSearch}) => {

	return <div className='items'>
	<div>
		<div className='search'>
			<input placeholder='Search Items' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
			<button onClick={handleSearch}>Search</button>
		</div>
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
