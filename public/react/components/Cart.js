import { useContext } from 'react'
import { CartContext } from '../context/cart'

export default function Cart({setView, toggle, showCart}) {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    return (
      <>
      <div className="overall">
  <h1 className="cart1">Cart</h1>
  <div className="map">
    {cartItems.map((item) => (
      <div className="map1" key={item.id}>
        <div className="map2">
          <img src={item.image} alt={item.name} className="imgCart" />
          <div className="cartText">
            <h1 className="cartName">{item.name}</h1>
            <p className="cartPrice">${item.price}</p>
          </div>
        </div>
        <div className=".pmButtons">
          <button
            className="plusButton"
            onClick={() => {
              addToCart(item)
            }}
          >
            +
          </button>
          <p>{item.quantity}</p>
          <button
            className="minusButton"
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
      <div className="cartTotals">
    <h1 className="cartTotals1">Total: ${getCartTotal()}</h1>
    <button
      onClick={() => {
        clearCart()
      }}
    >
      Clear cart
    </button>
  </div>
    ) : (
      <h1 className="cartEmpty">Your cart is empty</h1>
    )
  }
</div>
      </>
    )
  }