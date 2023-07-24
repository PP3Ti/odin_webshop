import ShoeItem from './ShoeItem'

export default function Shop({ shoes, selectShoe }) {
  return (
    <div className="shop-wrapper">
        {shoes.map(shoe => 
          <ShoeItem 
            key={shoe.name}
            shoe={shoe}
            selectShoe={selectShoe}
          />
        )}
        <div className='item-added-popup displayNone'>
              Item added to cart
        </div>
    </div>
  )
}