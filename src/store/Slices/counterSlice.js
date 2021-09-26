import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counterValue: 0
    },
    reducers: {
        increment: (state) =>{
            state.counterValue +=1
        },
        decrement: (state) =>{
            state.counterValue -=1
        },
        incrementByAmount: (state,action) =>{
            state.counterValue += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer