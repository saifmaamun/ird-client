'use server'

import { DuaCategory } from "@/types/types"



export const getDuas=async(): Promise<DuaCategory[]> =>{
  const res = await fetch("https://ird-back.vercel.app/api/categories")
  // const res = await fetch("http://localhost:5000/api/categories")
  
  return res.json()
}

