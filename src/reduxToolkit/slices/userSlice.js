import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Utils/axios";

const initialState = {
  user: {},
  loader: false,
  error: null,
};

export const usersList = createAsyncThunk(
  "userSlice/usersList",
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `/admin/user/listing?page=${page}&limit=${limit}`
      );
      if (res?.status === 200) {
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

export const updateStatus = createAsyncThunk(
  "userSlice/updateStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`/admin/user/updatestatus?userId=${id}`, {
        status,
      });
      if (res.status === 200) {
        return {
          status: res.status,
        };
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const deleteUser = createAsyncThunk(
  "userSlice/deleteUser",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`/admin/user/updatestatus?userId=${id}`, {
        status: "inactive",
        isaccountDeleted: true,
      });
      if (res.status === 200) {
        return {
          status: res.status,
        };
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

const userManagementSlice = createSlice({
  name: "user",
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
    builder.addCase(usersList.pending, (state) => {
      state.loader = true;
      state.usersList = {};
    });
    builder.addCase(usersList.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(usersList.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });

    //update status
    builder.addCase(updateStatus.pending, (state) => {
      state.loader = true;
      state.updateStatus = {};
    });
    builder.addCase(updateStatus.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(updateStatus.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });

    //delete user
    builder.addCase(deleteUser.pending, (state) => {
      state.loader = true;
      state.deleteUser = {};
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });
  },
});
export default userManagementSlice.reducer;
