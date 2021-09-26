import { createSlice } from '@reduxjs/toolkit'
import { categories } from '../States/categoryStates'

export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categoriesList: categories
    },
    reducers: {
        // increment: (state) =>{
        //     state.counterValue +=1
        // },
        // decrement: (state) =>{
        //     state.counterValue -=1
        // },
        // incrementByAmount: (state,action) =>{
        //     state.counterValue += action.payload
        // }
    }
})

// export const { increment, decrement, incrementByAmount } = categorySlice.actions

export default categorySlice.reducer