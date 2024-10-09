const SingleItem = ({item, setView, editItem, deleteItem})=>{   


    return <div className="singleItem">
   <div className="SingleItem_buttons">
    <button onClick={()=> editItem(item)}>Edit Item</button>
    <button onClick={()=> deleteItem(item.id)}>Delete Item</button>
   </div>
   <h3>{item.name}</h3>
   <img src={item.image}/>
   <p>{item.description}</p>
    </div>
}

export default SingleItem;