import { configureStore } from "@reduxjs/toolkit";
import { cryptoCoinsReducer, getCoins } from "../features/CryptoSlice";

const store = configureStore({
    reducer: {
        crypto: cryptoCoinsReducer
    }
})

export {store}
export {getCoins}