'use client'
import Link from "next/link"
import { Data } from "@/app/context"
import { useContext } from "react"
import { useRouter } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const {loggedIn, setLoggedIn, aside} = useContext(Data);
  const router = useRouter();
  
  function signOut(){
    router.push('/register')
    setLoggedIn(false)
  }

  return <header>
    <Link href='/' className="logo">FOOD APP</Link>
    <>
      {
        !loggedIn ? <>
          <Link href='/register'>Register</Link>
          <Link href='/login'>Login</Link>
        </> : <>
          <Link href='/search'>Search</Link>
          <button onClick={signOut}>Sign Out</button>
        </>
      }
      <span className="sidebar-btn" onClick={() => aside.current.classList.toggle('showAside')}>
        <AiOutlineMenu />
      </span>
    </>
  </header>
}
