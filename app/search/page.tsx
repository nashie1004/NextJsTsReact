'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Aside from '@/components/Aside'
import Filters from '@/components/Filters'
import Modal from '@/components/Modal'
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
        <Modal />
        <div className="filter-results">
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
        </div>
        <div className="search-results">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Aside />
    </main>
    <Footer />
  </>
}
