import { useState } from "react"

export default function SizeSelector({ currentShoe, setCurrentShoe }) {

  const [sizes, setSizes] = useState([36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47])
  const sizeSquares = document.querySelectorAll('.size')

  function handleClick(e) {
    setCurrentShoe({...currentShoe, size:e.target.id})

    for (const square of sizeSquares) {
      square.classList.remove('active-size')
      if (square.id === e.target.id) {
        square.classList.add('active-size')
      }
    }
  }
  return (
    <div className="size-selector">
      <h3 className="size-selector-title">Select Size</h3>
      <div className="sizes">
        {sizes.map(size => <div className="size" id={size} onClick={handleClick} key={size}>{size}</div>)}
      </div>
    </div>
  )
}