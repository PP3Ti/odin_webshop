export default function Shoe({ shoe, selectShoe } ) {
  function handleSelect(e) {
    selectShoe(e)
    document.querySelector('#showcase').showModal()
  }
  return (
    <div className="shoe">
      <h2 className="shoe-name">{shoe.name}</h2>
      <p className="shoe-manufacturer">by: {shoe.manufacturer}</p>
      <img src={shoe.picture1} alt={shoe.name} className="shoe-image"/>
      <div className="shoe-item-bottom">
        <p className="shoe-price">{`Price: `}€{shoe.price}</p>
        <button onClick={handleSelect}>Select size</button>
      </div>
    </div>
  )
}