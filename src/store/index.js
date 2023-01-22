import { configureStore } from "@reduxjs/toolkit";
import { carReducer, removeCar, addCar, onSearchTerm } from "./slices/carsSlice"
import { formReducer, changeCost, changeName } from "./slices/formSlice"



const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  }

})

export { store, removeCar, addCar, onSearchTerm, changeCost, changeName }