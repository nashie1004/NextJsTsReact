'use client'
import { createContext } from "react"

export const Data = createContext({hi: 'hi'});

export default function Context({children}: any) {
    const value = {hi: 'hi'};

  return (
    <Data.Provider value={value}>
        {children}
    </Data.Provider>
  )
}
