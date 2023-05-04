'use client'
import Link from "next/link"
import { Data } from "@/app/context"
import { useContext, useEffect, useState } from "react"
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const {loggedIn, aside} = useContext(Data);
  const [onSearchPage, setOnSearchPage] = useState<boolean>(false)


  useEffect(() => {
    const url: string = new URL(window.location.href).pathname.toString()
    if (url === '/search'){
      setOnSearchPage(true)
    } else {
      setOnSearchPage(false)
    }
  }, [])

  return <header>
    <Link href='/' className="logo">FOOD APP</Link>
    <>
      {
        (onSearchPage) && (
          <>
            <input className="search-input disappeanOn500Px" type="text" placeholder='Search food' />
            <button className="search-btn disappeanOn500Px">
              O
            </button>
          </>
        )
      }
      {
        !loggedIn ? <>
          <Link href='/register' className="disappeanOn500Px">Register</Link>
          <Link href='/login' className="disappeanOn500Px">Login</Link>
        </> : <>
          <Link href='/search' className="disappeanOn500Px">Search</Link>
          <Link href='/cart' className="disappeanOn500Px">Cart</Link>
          <Link href='/history' className="disappeanOn500Px">History</Link>
        </>
      }
      
      <span className="sidebar-btn" onClick={() => aside.current.classList.toggle('showAside')}>
        <AiOutlineMenu />
      </span>
    </>
  </header>
}
