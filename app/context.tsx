'use client'
import { createContext, useState } from "react"

export const Data = createContext({});

export default function Context({children}: any) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const value = {loggedIn, setLoggedIn};

  return (
    <Data.Provider value={value}>
      {children}
    </Data.Provider>
  )
}
