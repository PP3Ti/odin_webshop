import { Link } from "react-router-dom"

export default function Header() {
  return (
      <header>
        <Link to={'/'}><h1>Bouldering Shop</h1></Link>
        <nav>
          <ul>
            <Link to={'/shop'}><li>Shop</li></Link>
            <Link to={'/cart'}><li>Cart</li></Link>
          </ul>
        </nav>
      </header>
  )
}