import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../Config/authAxios";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const loginApi = createAsyncThunk(
  "login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post("/user/login", credentials);
      if(response.statusText=='OK'){
        localStorage.setItem('userId',response.data.userId);
        localStorage.setItem('token',response.data.token);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      });
  },
});

// export const { logout } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;

export default loginReducer;
