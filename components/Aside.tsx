'use client'
import { Data } from "@/app/context"
import { useContext, useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Aside() {
  const {aside, loggedIn, setLoggedIn} = useContext(Data);
  const router = useRouter();
  const [onSearchPage, setOnSearchPage] = useState<boolean>(false)

  function signOut(){
    router.push('/register')
    setLoggedIn(false)
  }

  useEffect(() => {
    const url: string = new URL(window.location.href).pathname.toString()
    if (url === '/search'){
      setOnSearchPage(true)
    } else {
      setOnSearchPage(false)
    }
  }, [])

  return <aside ref={aside}>
    {
      (onSearchPage) && (
        <div>
          <input className="search-input" type="text" placeholder='Search food' />
          <button className="search-btn">
            O
          </button>
        </div>
      )
    }
    {
      loggedIn ? <>
        <button onClick={signOut}>Log out</button>
        <p>
          <Link href='/search'>Search Page</Link>
        </p>
        <p>
          <Link href='/cart'>Cart Page</Link>
        </p>
      </> : <>
        <p>
          <Link href='/search'>Search Page</Link>
        </p>
        <p>
          <Link href='/register'>Register</Link>
        </p>
        <p>
          <Link href='/login'>Login</Link>
        </p>
      </>
    }
  </aside>
}
