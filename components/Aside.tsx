'use client'
import { Data } from "@/app/context"
import { useContext } from "react"

export default function Aside() {
  const {aside, loggedIn} = useContext(Data);

return <aside ref={aside}>
  {
    loggedIn ? <p>Logged In</p> : <p>Not Log in</p>
  }
  </aside>
}
