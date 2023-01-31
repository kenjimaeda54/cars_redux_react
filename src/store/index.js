import { configureStore } from "@reduxjs/toolkit";
import { carReducer, removeCar, addCar, onSearchTerm } from "./slices/carsSlice"
import { formReducer, changeCost, changeName } from "./slices/formSlice"
import { clearForm } from "./actions/clearForm"



const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  }

})

export { store, clearForm, removeCar, addCar, onSearchTerm, changeCost, changeName }