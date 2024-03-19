import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../Config/authAxios";
import { toast } from "react-toastify";
const initialState = {
  user: null,
  isSignedUp: false,
  isLoading: false,
  error: null,
  verifyingOTP: false,
  otpVerified: false,
  
};

export const userRestraionApi = createAsyncThunk(
  "registration",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("/user/register",data);
      toast.success(response?.data?.message)
      return await response.data;
    } catch (error) {
      console.log(error?.message)
      toast.error(error?.message)
      return rejectWithValue(error.response?.data);
    }
  }
);

export const verifyOtpApi = createAsyncThunk(
  "verifyOtp",
  async (data, { rejectWithValue }) => {
    
    try {
      const response = await instance.post("/user/activate-User", data);
      console.log(response)
      toast.success(response?.data?.message)
      return response.data;
    } catch (error) {
      toast.error(error?.message)
      return rejectWithValue(error.response?.data);
    }
  }
);
const singupSlice = createSlice({
  name: "singup-reducer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userRestraionApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(userRestraionApi.fulfilled, (state, action) => {
        // console.log(action)
        state.isLoading = false;
        state.isSignedUp = true;
        state.user = action.payload;
       
        state.error = null;
      })

      .addCase(userRestraionApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedUp = false;
        state.error = action.payload;
      })
      .addCase(verifyOtpApi.pending, (state) => {
        state.verifyingOTP = true;
        state.error = null;
      })
      .addCase(verifyOtpApi.fulfilled, (state, action) => {
        state.verifyingOTP = false;
        state.otpVerified = true;
        state.error = null;
      })
      .addCase(verifyOtpApi.rejected, (state, action) => {
        state.verifyingOTP = false;
        state.otpVerified = false;
        state.error = action.payload;
      });
      
  },
});


const singupReducer=singupSlice.reducer

export default singupReducer;
