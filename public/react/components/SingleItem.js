const SingleItem = ({item, setView})=>{
    console.log(item);
    
    return <>SingleItem
    <button onClick={()=> setView('addItem')}>additem</button>
    <button onClick={()=> setView('updateItem')}>update item</button>
    </>
}

export default SingleItem;