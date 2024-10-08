const SingleItem = ({item, setView, deleteItem})=>{    
    return <div className="singleItem">
   <div className="singleItem_buttons">
    <button>Edit Item</button>
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