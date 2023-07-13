import ShoeItem from './ShoeItem'


export default function Shop({ shoes, cartItems, setCartItems }) {
  return (
    <div className="shop-wrapper">
        {shoes.map(shoe => 
          <ShoeItem 
            name={shoe.name} 
            manufacturer={shoe.manufacturer} 
            img1={shoe.picture1} 
            img2={shoe.picture2} 
            price={shoe.price} 
            key={shoe.name}
          />
        )}
    </div>
  )
}