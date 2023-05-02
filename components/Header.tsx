'use client'
import Link from "next/link"
import { Data } from "@/app/context"
import { useContext } from "react"

export default function Header() {
  const {loggedIn, setLoggedIn} = useContext(Data);
  
  return <header>
    <Link href='/' className="logo">FOOD APP</Link>
    {
      !loggedIn ? <>
        <Link href='/register'>Register</Link>
        <Link href='/login'>Login</Link>
      </> : <>
        <Link href='/search'>Search</Link>
        <p>Shopping Cart</p>
        <button>Sign Out</button>
      </>
    }
  </header>
}
