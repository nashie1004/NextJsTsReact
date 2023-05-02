'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Data } from '../context'
import { useContext } from 'react'

export default function page() {
  const {loggedIn, setLoggedIn} = useContext(Data)

  return <>
    <Header />
    <main>
      <h1>Get Started</h1>
      <input type="text" placeholder='Username' />
      <input type="text" placeholder='Password' />
      <button>Register</button>
    </main>
    <Footer />
  </>
}
