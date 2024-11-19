import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
export interface productState {
  value: number
}

// Define the initial state using that type
const initialState: productState = {
  value: 0
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  }
})

// export const { increment, decrement, incrementByAmount } = productSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.products.value

export default productSlice.reducer