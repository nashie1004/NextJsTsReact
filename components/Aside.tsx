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
    {
      loggedIn ? <>
        <button onClick={signOut}>Log out</button>
        <p>
          <Link href='/search'>Search</Link>
        </p>
        <div className="shops">
          
        </div>
      </> : <>
        <p>Not Log in</p>
        <p>
          <Link href='/search'>Search</Link>
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
