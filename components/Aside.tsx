'use client'
import { Data } from "@/app/context"
import { useContext } from "react"
import { useRouter } from 'next/navigation';

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
        <div className="shops">
          
        </div>
      </> : <>
        <p>Not Log in</p>
      </>
    }
  </aside>
}
