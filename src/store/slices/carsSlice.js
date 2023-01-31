import { createSlice, nanoid } from "@reduxjs/toolkit";


const carsSlicer = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carsList: []
  },
  reducers: {
    onSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      // payload =  {name,cost,id}
      state.carsList.push(action.payload)


    },
    removeCar(state, action) {
      //payload =  id
      state.carsList = state.carsList.filter(it => it.id !== action.payload)
    }
  }

})


export const { onSearchTerm, addCar, removeCar } = carsSlicer.actions
export const carReducer = carsSlicer.reducer