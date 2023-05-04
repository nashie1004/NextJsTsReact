'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function page() {
  const router = useRouter();
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function submitRegisterForm(e: any): void{
    e.preventDefault()
    if (name !== '' && password !== ''){
      router.push('/login')
    }
  }

  return <>
    <Header />
    <main>
      <section>
        <form onSubmit={submitRegisterForm}>
          <h1>Get Started</h1>
          <input
            onChange={e => setName(e.target.value)}
           type="text" placeholder='Username' />
          <input 
            onChange={e => setPassword(e.target.value)}
          type="text" placeholder='Password' />
          <button>Register</button>
        </form>
      </section>
      <Aside />
    </main>
    <Footer />
  </>
}
