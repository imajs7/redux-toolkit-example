import { createReducer } from "@reduxjs/toolkit";

const initialStateQty = {
    quantity: 0
}
export const qtyReducer = createReducer( initialStateQty, {
    increment: (state, action) => {
        state.quantity += 1;
    },
    decrement: (state, action) => {
        state.quantity -= 1;
    } 
} );

const initialStatePrice = {
    price: ''
}

export const priceReducer = createReducer( initialStatePrice, {
    setPrice: (state, action) => {
        state.price = action.payload
    }
} );