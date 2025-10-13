import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Utils/axios";

export const authLogin = createAsyncThunk(
  "authManagementSlice/authLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("/admin/login", payload);

      if (response.status === 200) {
        return {
          status: response.status,
          data: response.data,
        };
      } else {
        return rejectWithValue({
          status: response.status,
          data: response.data,
        });
      }
    } catch (error) {
      return rejectWithValue({
        status: err.response?.status || 500,
        data: err.response?.data || { message: "Network or server error" },
      });
    }
  }
);

const initialState = {
  loader: false,
};

const authManagementSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      //auth login
      .addCase(authLogin.pending, (state) => {
        state.loader = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loader = false;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loader = false;
      });
  },
});
export default authManagementSlice.reducer;
