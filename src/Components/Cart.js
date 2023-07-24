import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"


export default function Cart({ cartItems, setCartItems }) {

  const [sum, setSum] = useState(0)

  useEffect(() => {
      let count = 0
      for (const item of cartItems) {
        count += item.price
      }
      setSum(count)
  }, [cartItems])

  function deleteItem(e) {
    const target = e.target.parentElement.parentElement.parentElement.id
    setCartItems(cartItems.filter(items => items.key !== target))
  }


  if (cartItems.length === 0) {
    return (
      <div className="cart-wrapper">
        <div className="cart">
          <h1 className="cart-title">Shopping Cart</h1>
          <p className="empty-cart-text">
            Your cart seems to be empty!
          </p>
          <Link to={'/shop'} className="return-to-shop">
            <button className="return-to-shop-button">
              Return to the shop
            </button>
          </Link>
        </div>
      </div>
    )
  } else {
      return (
        <div className="cart-wrapper">
          <div className="cart">
            <h1 className="cart-title">Shopping Cart</h1>
            <div className="cart-items">
              {cartItems.map((cartItem) => <CartItem item={cartItem} deleteItem={deleteItem} key={cartItem.key}/>)}
              <h4 className="cart-sum">Total: €{sum}</h4>
            </div>
            <div className="cart-bottom">
              <button className="checkout-button" onClick={() => window.alert('Checkout is not available at this time')}>Proceed to checkout</button>
            </div>
          </div>
        </div>
      )
  }
  
}