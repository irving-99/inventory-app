import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import AddItems from './AddItem';
import UpdateItem from './UpdateItem';
import SingleItem from './SingleItem';

export const App = () => {

	const [items, setItems] = useState([]);
	const [item, setItem] = useState({});
	const [view, setView] = useState(1);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
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
			{view == 1? 
			<div className='items'>
				<ItemsList items={items} />
				<SingleItem item={item}/>
			</div> : view == 2?
			 <AddItems/>:
			 <UpdateItem/>}
		</main>
	)
}