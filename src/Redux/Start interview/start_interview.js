import instance from "../../Config/authAxios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    question:{},
    error: false,
    isLoading: false
};

export const startinterviewApi = createAsyncThunk(
   "startinterview",
   async(data,{rejectWithValue}  )=>{
     try {
        const response = await instance.post("/interview/start",data);
        return await response.data;
     } catch (error) {
        return rejectWithValue(error.response?.data);
     }
   }
);


const startInterviewSlice = createSlice({
    name:"startinterview",
    initialState,
    extraReducers: (builder) =>{
        builder
             .addCase(startinterviewApi.pending, (state) => {
                state.isLoading = true;
                state.error = false;
             })
            .addCase(startinterviewApi.fulfilled, (state,action)=>{
                state.isLoading = false;
                state.question = action.payload;
                state.error = false;
            })
            .addCase(startinterviewApi.rejected,(state)=>{
                state.isLoading = false;
                state.error  = true; 
            })
    }
})


const startInterviewReducer = startInterviewSlice.reducer;
export default startInterviewReducer;