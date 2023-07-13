export default function CartItem({ item, cartItems, setCartItems }) {
  return (
    <div className="cart-item">
      <h3>{item.name}<span className="cart-item-size">size: {item.size}</span></h3>
      <span className="cart-item-price">€{item.price}</span>
    </div>
  )
}