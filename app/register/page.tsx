'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import { Data } from '../context'
import { useContext } from 'react'
import { useRouter } from 'next/navigation';

export default function page() {
  const {loggedIn, setLoggedIn} = useContext(Data)
  const router = useRouter();

  function submitRegisterForm(e: any): void{
    e.preventDefault()
    router.push('/login')
  }

  return <>
    <Header />
    <main>
      <section>
        <form onSubmit={submitRegisterForm}>
          <h1>Get Started</h1>
          <input type="text" placeholder='Username' />
          <input type="text" placeholder='Password' />
          <button>Register</button>
        </form>
      </section>
      <Aside />
    </main>
    <Footer />
  </>
}
