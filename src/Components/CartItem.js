import { ReactComponent as DeleteIcon} from '../Assets/delete-icon.svg'

export default function CartItem({ item, deleteItem }) {
  return (
    <div className="cart-item" id={item.key}>
      <h3>{item.name}<span className="cart-item-size">size: {item.size}</span></h3>
      <div className="cart-item-right">
        <div className="cart-item-price">€{item.price}</div>
        <DeleteIcon className="delete-cart-item" alt='delete icon' fill='#E9F8F9' width={'16px'} onClick={deleteItem}/>
      </div>
    </div>
  )
}