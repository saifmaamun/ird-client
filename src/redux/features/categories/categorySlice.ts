import { DuaCategory } from "@/types/types"
import { createSlice } from "@reduxjs/toolkit"



// Define the initial state using that type
const initialState: DuaCategory = {
    _id: '',
    category_id: 0,
    category_name_bn: 'string',
    category_name_en: '',
    subcategories: [],
}

export const categorySlice = createSlice({
  name: 'category',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   setDuas: (state, action) => {
    state = action.payload;
  },
  },
})

export const { } = categorySlice.actions



export default categorySlice.reducer