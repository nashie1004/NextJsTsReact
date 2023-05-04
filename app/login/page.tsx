'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import { Data } from '../context'
import { useContext } from 'react'
import { useRouter } from 'next/navigation';

export default function page() {
  const {setLoggedIn} = useContext(Data)
  const router = useRouter();

  function submitLoginForm(e: any): void{
    e.preventDefault()
    router.push('/search')
    setLoggedIn(true)
  }

  return <>
    <Header />
    <main>
      <section>
        <form onSubmit={submitLoginForm}>
          <h1>Sign in</h1>
          <input type="text" placeholder='Username' />
          <input type="text" placeholder='Password' />
          <button>Login</button>
        </form>
      </section>
      <Aside />
    </main>
    <Footer />
  </>
}
