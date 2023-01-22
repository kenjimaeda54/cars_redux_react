import { createSlice, nanoid } from "@reduxjs/toolkit";


const carsSlicer = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: []
  },
  reducers: {
    onSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      // payload =  {name,cost,id}
      state.cars.push({
        name: action.payload,
        cost: action.payload,
        id: nanoid()
      })

    },
    removeCar(state, action) {
      //payload =  id
      state.cars = state.cars.filter(it => it.id !== action.payload)
    }
  }

})


export const { onSearchTerm, addCar, removeCar } = carsSlicer.actions
export const carReducer = carsSlicer.reducer