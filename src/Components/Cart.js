import { useEffect, useState } from "react"
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

  return (
    <div className="cart-wrapper">
      <div className="cart">
        <h1 className="cart-title">Shopping Cart</h1>
        {cartItems.map((cartItem) => <CartItem item={cartItem} cartItems={cartItems} setCartItems={setCartItems} key={cartItem.key}/>)}
        <div className="cart-bottom">
          <h4 className="cart-sum">Total: €{sum}</h4>
          <button className="checkout-button" onClick={() => window.alert('Checkout is not available at this time')}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}