import { createSlice } from "@reduxjs/toolkit";
import { clearForm } from "../actions/clearForm"


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
  },
  extraReducers: (builder) => {
    builder.addCase(clearForm, (state, action) => {
      state.name = "",
        state.cost = ""
    })
  }


})


export const { changeCost, changeName } = formSlice.actions
export const formReducer = formSlice.reducer