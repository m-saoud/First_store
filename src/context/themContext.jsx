"use client"
import { createContext, useState } from "react"

export const ThemContext = createContext()

 export const ThemProveder = ({ children }) => {
    
    const [mode, setMode] = useState('dark')
    const toggle = () => {
        setMode=( prev=>(prev==="dark"?"light":"dark"))
    }
    <ThemContext.Provider value={{toggle,mode}}>
    {children}
</ThemContext.Provider>
}