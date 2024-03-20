import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../Config/authAxios";



const initialState = {
  interviews: [],
  isLoading: false,
  error: null,
};

export const fetchInterviews = createAsyncThunk(
  "interviews/fetchInterviews",
  async (data, { rejectWithValue }) => {
    try {
    
      const response = await instance.post("/interviews",data);
      return response.data;
    } catch (error) {
    
      return rejectWithValue(error.response?.data);
    }
  }
);

const interviewSlice = createSlice({
  name: "interviews",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchInterviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchInterviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.interviews = action.payload;
        state.error = null;
      })
      .addCase(fetchInterviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});



export const interviewReducer = interviewSlice.reducer;

export default interviewReducer;
