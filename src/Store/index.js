import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./Slices/carsSlices";
import { formReducer, changeCost, changeName } from "./Slices/formSlices";

const store = configureStore({
    reducer: {
        cars : carsReducer,
        form : formReducer

    }
})



export {
    store,
    changeCost,
    changeName,
    addCar,
    removeCar,
    changeSearchTerm
}