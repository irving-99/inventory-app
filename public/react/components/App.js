import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import "../../style.css"

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';



export const App = () => {
	
	const [items, setItems] = useState([]);
	const [item, setItem] = useState({});
	const [view, setView] = useState('viewItem');
	const [itemChanged, setItemChanged] = useState([])
	const [searchItem, setSearchItem] = useState('')

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			setItems(itemsData);
			setItem(itemsData[0])
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, [itemChanged]);

	const fetchSingleItem = async (itemId)=>{
		try {
			const res = await fetch(`${apiURL}/items/${itemId}`)
			const data = await res.json()
			setItem(data)
			console.log('fetched single item');
			console.log(data);
			
			
		} catch (error) {
			console.error("Ohh something went wrong fetching single item", error)
		}
	}

	const deleteItem = async (itemId)=>{
		try {
			const res = await fetch(`${apiURL}/items/${itemId}`,{
				method: "DELETE"
			})
			const data = await res.json()
			if(data){
				setItemChanged(data)
			}
		} catch (error) {
			console.error("Sorry something went wrong when trying to delete the item", error);
			
		}
	}

	const addItem = async (body)=>{
		try {
			console.log('Add item hit');
			
		} catch (error) {
			console.error('error adding item');
			
		}
	}

	const handleSearch = async()=>{
		try {
			const res = await fetch(`${apiURL}/items?search=${searchItem}`)
			const data = await res.json()
			setItems(data)
			console.log(data);
		} catch (error) {
			console.error("OOoops Something Went Wrong While Trying To Search", error);
		}
	}

	return (
		<main>	
			{view == 'viewItem'? 
			<div className='items'>
				<ItemsList setView={setView} items={items} item={item} setItem={setItem} fetchSingleItem={fetchSingleItem} deleteItem={deleteItem} searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch}/>
			</div> : view == 'addItem'?
			 <AddItem/>:
			 <UpdateItem setView={setView}/>}
		</main>
	)
}