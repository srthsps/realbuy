import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import categoryReducer from './Slices/categorySlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        category: categoryReducer
    }
})