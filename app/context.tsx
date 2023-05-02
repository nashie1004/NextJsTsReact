'use client'
import { createContext } from "react"

export const Data = createContext();

export default function Context({children}: React.ReactNode) {
    const value = {hi: 'hi'};

  return (
    <Data.Provider value={value}>
        {children}
    </Data.Provider>
  )
}
