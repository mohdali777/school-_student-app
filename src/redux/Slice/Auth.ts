import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const StudentSlice = createSlice({
  name: "StudentAuth",
  initialState:{login:false},
  reducers: {
    login(state, action) {
      state.login = action.payload
    },
  },
})

export default StudentSlice.reducer;
export const { login } = StudentSlice.actions;
