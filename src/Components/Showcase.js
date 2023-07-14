import SizeSelector from "./SizeSelector"

export default function Showcase({ currentShoe, setCurrentShoe, cartItems, setCartItems }) {

  function handleClick(e) {
    if (e.target.id === 'showcase') {
      e.target.close()
      const sizeSquares = document.querySelectorAll('.size')
      sizeSquares.forEach(square => {
        square.classList.remove('active-size')
      })
    }
  }

  function handleBackButton(e) {
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.close()
    const sizeSquares = document.querySelectorAll('.size')
    sizeSquares.forEach(square => {
      square.classList.remove('active-size')
    })
  }

  function handleAddToCart(e) {
    if (currentShoe.size === undefined) {
      window.alert('Please select a size')
    } else {
      setCartItems([...cartItems, currentShoe])
      setCurrentShoe({})
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.close()
      const sizeSquares = document.querySelectorAll('.size')
      sizeSquares.forEach(square => {
      square.classList.remove('active-size')
    })
    }
  }

  return (
    <dialog id="showcase" onClick={handleClick}>
      <div className="showcase-wrapper">
        <h1 className="showcase-name"><span>{currentShoe.manufacturer}</span> {currentShoe.name}</h1>
        <div className="showcase-body">
          <img src={currentShoe.picture2} alt={currentShoe.name} className="showcase-image"/>
          <div className="showcase-body-right">
            <div className="showcase-description">
              <h3 className="showcase-description-title">Description</h3>
              <p className="showcase-description-text">{currentShoe.description}</p>
            </div> 
            <SizeSelector currentShoe={currentShoe} setCurrentShoe={setCurrentShoe} />
            <div className="showcase-buttons">
              <button className="back-to-shopping-button" onClick={handleBackButton}>Back</button>
              <button className="add-to-cart-button" onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}