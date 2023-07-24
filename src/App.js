import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Landing from "./Components/Landing"
import Cart from './Components/Cart'
import Shop from './Components/Shop'
import About from "./Components/About"
import bg from './Assets/bg3.png'
import { Route, Routes } from "react-router-dom"
import ShoeData from "./Assets/ShoeData"
import { useState } from "react"
import { v4 as uuid } from 'uuid'
import Showcase from "./Components/Showcase"

export default function App() {

  const [shoes, setShoes] = useState(ShoeData)
  const [cartItems, setCartItems] = useState([])
  const [currentShoe, setCurrentShoe] = useState({})

  function selectShoe(e) {
    const name = e.currentTarget.parentElement.parentElement.firstChild.textContent
    for (const item of ShoeData) {
      if (item.name === name) {
        setCurrentShoe({...item, key:uuid()})
      }
    }
  }

  const triggerPopup = () => {
    const popup = document.querySelector('.item-added-popup')
    popup.classList.remove('displayNone')
    popup.classList.add('displayGrid')
    setTimeout(() => {
      popup.classList.remove('displayGrid')
      popup.classList.add('displayNone')
    }, 3000)
  }
  

  return (
    <div className="app" style={{ backgroundImage:`url(${bg})` }}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/shop" element={<Shop shoes={shoes} selectShoe={selectShoe} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Showcase currentShoe={currentShoe} setCurrentShoe={setCurrentShoe} cartItems={cartItems} setCartItems={setCartItems} triggerPopup={triggerPopup}/>
      <Footer />
    </div>
  )
}

