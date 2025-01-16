
import { createSlice } from "@reduxjs/toolkit"

export interface IInitialState {
    categoryId: number;
    subCategoryId:number;
    
  }

// Define the initial state using that type
const initialState: IInitialState = {
    
    categoryId: 1,
    subCategoryId:1
}

export const categorySlice = createSlice({
  name: 'category',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   setCategoryId: (state, action) => {
    state.categoryId = action.payload;
  },
   setSubCategoryId: (state, action) => {
    state.subCategoryId = action.payload;
  },
  },
})

export const {setCategoryId,setSubCategoryId } = categorySlice.actions



export default categorySlice.reducer