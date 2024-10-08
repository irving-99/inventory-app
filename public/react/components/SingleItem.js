const SingleItem = ({item, setView, deleteItem})=>{    
    return <div className="singleItem">
   <div className="SingleItem_buttons">
    <button>Edit Item</button>
    <button onClick={()=> deleteItem(item.id)}>Delete Item</button>
   </div>
   <h3>{item.name}</h3>
   <img src={item.image}/>
   <p>{item.description}</p>
    </div>
}

export default SingleItem;