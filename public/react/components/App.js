import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';
import SingleItem from './SingleItem';

export const App = () => {
	
	const [items, setItems] = useState([]);
	const [item, setItem] = useState({});
	const [view, setView] = useState('viewItem');

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
			{view == 'viewItem'? 
			<div className='items'>
				<ItemsList items={items} />
				<SingleItem item={item} setView={setView}/>
			</div> : view == 'addItem'?
			 <AddItem/>:
			 <UpdateItem setView={setView}/>}
		</main>
	)
}