import { configureStore } from "@reduxjs/toolkit";
import {qtyReducer, priceReducer} from './Reducers'

const store = configureStore({
    reducer: {
        qtyReducer,
        priceReducer
    }
});

export {
    store
}