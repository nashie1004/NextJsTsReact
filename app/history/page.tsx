'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import TransactionsCard from '@/components/TransactionsCard'
import NotLoggedIn from '@/components/NotLoggedIn'
import { Data } from '../context'
import { useContext } from 'react'

export default function page() {
  const {loggedIn} = useContext(Data)

  if (!loggedIn) return <>
    <Header />
    <main>
      <section>
        <NotLoggedIn />
      </section>
      <Aside />
    </main>
    <Footer />
  </>

  return <>
    <Header />
    <main>
      <section>
        <div className="historyContainer">
          <h1>Transactions</h1>
          <TransactionsCard />
          <TransactionsCard />
          <TransactionsCard />
        </div>
      </section>
      <Aside />
    </main>
    <Footer />
  </>
}
