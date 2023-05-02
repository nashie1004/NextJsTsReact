'use client'
import { Dispatch, SetStateAction, createContext, useRef, useState } from "react"
import { IconContext } from "react-icons"

interface ValueType {
  loggedIn: boolean | null,
  setLoggedIn: Dispatch<SetStateAction<boolean>> | null
  aside: HTMLElement | null
}

export const Data = createContext({} as any);

export default function Context({children}: any) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const aside = useRef(null)

  const value: ValueType = {loggedIn, setLoggedIn, aside};

  return (
    <Data.Provider value={value}>
      <IconContext.Provider value={{size: '1.25rem'}}>
        {children}
      </IconContext.Provider>
    </Data.Provider>
  )
}
