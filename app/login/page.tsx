'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import { Data } from '../context'
import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function page() {
  const {setLoggedIn} = useContext(Data)
  const router = useRouter();
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function submitLoginForm(e: any): void{
    e.preventDefault()
    if (name !== '' && password !== ''){
      router.push('/search')
      setLoggedIn(true)
    }
  }

  return <>
    <Header />
    <main>
      <section>
        <form onSubmit={submitLoginForm}>
          <h1>Sign in</h1>
          <input
            onChange={e => setName(e.target.value)}
          type="text" placeholder='Username' />
          <input 
            onChange={e => setPassword(e.target.value)}
          type="text" placeholder='Password' />
          <button>Login</button>
        </form>
      </section>
      <Aside />
    </main>
    <Footer />
  </>
}
