import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

// const url = 'https://rest.coinapi.io/v1/assets'
const url = 'https://api.coincap.io/v2/assets'
// const apiKey = '8F8BB59A-69ED-4138-A195-0DDEDE3D78A8';
// const apiKey = ' 7f8f0c07-554e-4edb-8051-0c3cf0ba3adc'
export const getCoins = createAsyncThunk('features/getCryptoCoins', async ()=> {
    try {
        const response = await axios.get(url)
        console.log(response)
        return response['data'].data
            
    } catch (error) {
        console.log(error.response.data)
    }
    
})


const initialState = {
    cryptoCurrency: [],
    status:'idle'
}
const cryptoSlice = createSlice({
    name:'crypto',
    initialState,
    extraReducers(builder){
        builder.addCase(getCoins.fulfilled, (state, action)=> {
            state.status = 'idle'
            state.cryptoCurrency = action.payload
        })
        builder.addCase(getCoins.pending, (state)=> {
            state.status = 'pending'
    })
    }
})

export const cryptoCoinsReducer = cryptoSlice.reducer;
