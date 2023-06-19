import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    amount:0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },        
        decrement: (state) => {
            state.count = Math.max(state.count - 1, 0);
        },
        reset: (state) => {
            state.count = 0;
            state.amount = 0;
        },
        setAmount: (state) => {
            state.amount = state.count;
        }
    }
});

export const { increment, decrement, reset, setAmount  } = counterSlice.actions;

export default counterSlice.reducer;