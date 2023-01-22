import { createSlice } from "@reduxjs/toolkit";



const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: ""
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


export const { changeCost, changeName } = formSlice.actions
export const formReducer = formSlice.reducer