'use client'

export default function ShoppingCard() {
  return (
    <div className="shoppingCard">
        <img src="https://picsum.photos/id/237/800/800" alt="" />
        <div className="shoppingInfo">
            <h2>Lorem ipsum dolor sit.</h2>
            <p>50.00</p>
            <div className="actions">
                <button onClick={() => {
                    alert('-')
                }}>-</button>
                <div>0</div>
                <button onClick={() => {
                    alert('+')
                }}>+</button>
            </div>
        </div>
        <h2 className='price'>100.00</h2>
    </div>  
    )
}
