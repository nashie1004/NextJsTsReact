'use client'
import { Data } from "@/app/context"
import { useContext } from "react"
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Aside() {
  const {aside, loggedIn, setLoggedIn} = useContext(Data);
  const router = useRouter();

  function signOut(){
    router.push('/register')
    setLoggedIn(false)
  }

  return <aside ref={aside}>
    <div>
      <input className="search-input" type="text" placeholder='Search food' />
      <button className="search-btn">
        O
      </button>
    </div>
    {
      loggedIn ? <>
        <button onClick={signOut}>Log out</button>
        <p>
          <Link href='/search'>Search Page</Link>
        </p>
        <div className="shops">
          
        </div>
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
        <div className="shops">
          
        </div>
      </>
    }
  </aside>
}
