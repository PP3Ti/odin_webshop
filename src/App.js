import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Landing from "./Components/Landing"
import Cart from './Components/Cart'
import Shop from './Components/Shop'
import bg from './Assets/bg3.png'
import { Route, Routes } from "react-router-dom"
import ShoeData from "./Assets/ShoeData"
import { useEffect, useState } from "react"

export default function App() {

  const [shoes, setShoes] = useState(ShoeData)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setCartItems((cartItems) => [...cartItems, ShoeData[0], ShoeData[2]])
  }, [])


  return (
    <div className="app" style={{ backgroundImage:`url(${bg})` }}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/shop" element={<Shop shoes={shoes} cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
      <Footer />
    </div>
  )
}

