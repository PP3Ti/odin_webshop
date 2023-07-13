export default function Shoe({ name, manufacturer, img1, img2, price } ) {
  return (
    <div className="shoe">
      <h2 className="shoe-name">{name}</h2>
      <p className="shoe-manufacturer">by: {manufacturer}</p>
      <img src={img1} alt={name} className="shoe-image"/>
      <div className="shoe-item-bottom">
        <p className="shoe-price">{`Price: `}€{price}</p>
        <button>Select size</button>
      </div>
    </div>
  )
}