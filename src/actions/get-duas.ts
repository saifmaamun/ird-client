'use server'

import { DuaCategory } from "@/types/types"



export const getDuas=async(): Promise<DuaCategory[]> =>{
  const res = await fetch("https://ird-back.vercel.app/categories")
  // const data= await res.json()
  if (!res.ok) throw new Error('Failed to fetch duas')
  return res.json()
}

