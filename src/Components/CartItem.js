export default function CartItem({ item, deleteItem }) {
  return (
    <div className="cart-item" id={item.key}>
      <h3>{item.name}<span className="cart-item-size">size: {item.size}</span></h3>
      <div className="cart-item-right">
        <div className="cart-item-price">€{item.price}</div>
        <div className="delete-cart-item" onClick={deleteItem}>delete</div>
      </div>
    </div>
  )
}