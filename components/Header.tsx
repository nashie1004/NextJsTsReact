'use client'
import Link from "next/link"
import { Data } from "@/app/context"
import { useContext } from "react"
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const {loggedIn, aside} = useContext(Data);
  
  return <header>
    <Link href='/' className="logo">FOOD APP</Link>
    <>
      {
        !loggedIn ? <>
          <Link href='/register'>Register</Link>
          <Link href='/login'>Login</Link>
        </> : <>
          {
            (new URL(window.location.href)).pathname.toString() !== '/search' && (
              <>
                <input className="search-input" type="text" placeholder='Search food' />
                <button className="search-btn">Search</button>
              </>
            )
          }
          <Link href='/search'>Search</Link>
        </>
      }
      <span className="sidebar-btn" onClick={() => aside.current.classList.toggle('showAside')}>
        <AiOutlineMenu />
      </span>
    </>
  </header>
}
