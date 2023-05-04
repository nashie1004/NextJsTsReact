'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import ShoppingCard from '@/components/ShoppingCard'
import { Data } from '../context'
import { useContext } from 'react'

export default function page() {
  const {loggedIn} = useContext(Data)
  
  function submitCarts(): void{
    alert(2)
  }

  return <>
    <Header />
    <main>
        <section>
            <div className="shoppingCartContainer">
                <div className="shoppingTransaction">
                    <h1>Shopping Cart</h1>
                    <p>
                        <span>Lorem, ipsum.</span>
                        <span>10.00</span>
                    </p>
                    <p>
                        <span>Lorem, ipsum.</span>
                        <span>10.00</span>
                    </p>
                    <h3>
                        <span>Total: </span>
                        <span>100.00</span>
                    </h3>
                    <button onClick={submitCarts}>Checkout</button>
                </div>
                <div className="shoppingCards">
                    <h1>Items</h1>
                    <ShoppingCard />
                    <ShoppingCard />
                    <ShoppingCard />
                    <ShoppingCard />
                </div>
            </div>
        </section>
        <Aside />
    </main>
    <Footer />
  </>
}
