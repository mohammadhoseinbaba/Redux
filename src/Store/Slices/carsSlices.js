import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlices = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action) {
            const updated = state.cars.filter((car) => {
                return car.id !== action.payload
            })
            state.cars = updated
        }
    }
})


export const { changeSearchTerm, addCar, removeCar } = carsSlices.actions;
export const carsReducer = carsSlices.actions;