import { configureStore } from "@reduxjs/toolkit";
import {CartSlice} from "./Slices/CartSlices";
import CartReducer from './Slices/CartSlices'


export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer
    }
        
})