import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Utils/axios";

const initialState = {
  user: {},
  loader: false,
  error: null,
};

export const authLogin = createAsyncThunk(
  "authSlice/authLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post("/admin/login", payload);
      if (res?.status === 200) {
        window.localStorage.setItem("token", JSON.stringify(res?.data.token));
        return {
          status: res.status,
          data: res.data,
        };
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

const authManagementSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      (state.user = null),
        (state.error = null),
        window.localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    //auth login
    builder.addCase(authLogin.pending, (state) => {
      state.loader = true;
      state.authLogin = {};
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });
  },
});
export default authManagementSlice.reducer;
