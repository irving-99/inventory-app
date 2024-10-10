const SingleItem = ({item, setView, editItem, deleteItem})=>{  
    
    


    return <div className="singleItem">

   <div className="singleItem_buttons">
    <button onClick={()=> setView('editItem')}>Update Item</button>
    <button onClick={()=> deleteItem(item.id)}>Delete Item</button>
   </div>
   <div className="singleItemInfo">
        <h3>{item.name}</h3>
        <img src={item.image}/>
        <p>{item.description}</p>
   </div>
    </div>
}

export default SingleItem;