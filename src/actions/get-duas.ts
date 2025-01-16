'use server'

import { DuaCategory } from "@/types/types"



export const getDuas=async(): Promise<DuaCategory[]> =>{
  const res = await fetch("https://ird-back.vercel.app/categories")
  
  return res.json()
}

