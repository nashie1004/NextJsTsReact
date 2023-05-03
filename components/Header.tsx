'use client'
import Link from "next/link"
import { Data } from "@/app/context"
import { useContext, useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

export default function Header() {
  const {loggedIn, aside} = useContext(Data);
  const [showSearchBar, setShowSearchBar] = useState(false)

  useEffect(() => {
    if (new URL(window.location.href).pathname.toString() === '/search'){
      setShowSearchBar(true)
    } else {
      setShowSearchBar(false)
    }
  }, [])

  return <header>
    <Link href='/' className="logo">FOOD APP</Link>
    <>
      {
        !loggedIn ? <>
          <Link href='/register' className="disappeanOn500Px">Register</Link>
          <Link href='/login' className="disappeanOn500Px">Login</Link>
        </> : <>
          {
            showSearchBar && (
              <>
                <input className="search-input" type="text" placeholder='Search food' />
                <button className="search-btn">
                  O
                </button>
              </>
            )
          }
          <Link href='/search' className="disappeanOn500Px">Search</Link>
        </>
      }
      <span className="sidebar-btn" onClick={() => aside.current.classList.toggle('showAside')}>
        <AiOutlineMenu />
      </span>
    </>
  </header>
}
