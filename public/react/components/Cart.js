import { useContext } from 'react'
import { CartContext } from '../context/cart'

export default function Cart({setView, toggle, showCart}) {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    return (
      <>
      <div>
  <h1 className="buttons">Cart</h1>
  <div className="container">
    {cartItems.map((item) => (
      <div key={item.id}>
        <div>
          <img src={item.image} alt={item.name} />
          <div className="cartText">
            <h1 className="cartName">{item.name}</h1>
            <p className="cartPrice">${item.price}</p>
          </div>
        </div>
        <div>
          <button
            className="buttons"
            onClick={() => {
              addToCart(item)
            }}
          >
            +
          </button>
          <p>{item.quantity}</p>
          <button
            className="buttons"
            onClick={() => {
              removeFromCart(item)
            }}
          >
            -
          </button>
        </div>
      </div>
    ))}
  </div>
  {
    cartItems.length > 0 ? (
      <div>
    <h1>Total: ${getCartTotal()}</h1>
    <button className='buttons'
      onClick={() => {
        clearCart()
      }}
    >
      Clear cart
    </button>
  </div>
    ) : (
      <h1>Your cart is empty</h1>
    )
  }
</div>
      </>
    )
  }