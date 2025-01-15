
import { createSlice } from "@reduxjs/toolkit"

export interface IInitialState {
    categoryIid: number;
    
  }

// Define the initial state using that type
const initialState: IInitialState = {
    
    categoryIid: 0
}

export const categorySlice = createSlice({
  name: 'category',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   setCategoryId: (state, action) => {
    state.categoryIid = action.payload;
  },
  },
})

export const {setCategoryId } = categorySlice.actions



export default categorySlice.reducer