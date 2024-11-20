import { createSlice } from "@reduxjs/toolkit";

const formSlices = createSlice({
    name: 'form',
    initialState: {
        name: "",
        cost: 0,
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        },
        changeCost(state, action) {
            state.cost = action.payload
        }
    }
})


export const { changeCost, changeName } = formSlices.actions;
export const formReducer = formSlices.reducer;