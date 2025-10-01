import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Utils/axios";

const initialState = {
  subadmin: {},
  loader: false,
  error: null,
};

export const addRole = createAsyncThunk(
  "subadminSlice/addRole",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post("/admin/role/createRole", payload);
      if (res?.status === 201) {
        return {
          status: res.status,
          data: res.data,
        };
      }
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || "Something went wrong";
      return rejectWithValue({ status, message });
    }
  }
);

export const getRoles = createAsyncThunk(
  "subadminSlice/getRoles",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get("/admin/role/listAvailable", payload);
      if (res?.data?.code === 200) {
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

export const deleteRole = createAsyncThunk(
  "subadminSlice/deleteRole",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/admin/role/deleteRole?roleId=${id}`);
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

export const getSubadmin = createAsyncThunk(
  "subadminSlice/getSubadmin",
  async ({ roleName }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/admin/role/listing?role=${roleName}`);
      if (res?.data?.status === 200) {
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
  "subadminSlice/updateStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`/admin/role/updateRole?subadminId=${id}`, {
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

export const deleteSubadmin = createAsyncThunk(
  "subadminSlice/deleteSubadmin",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/admin/role/deleteRole?roleId=${id}`);
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

export const subadminDetails = createAsyncThunk(
  "subadminSlice/subadminDetails",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/admin/role/viewInfo?subadminId=${id}`);
      if (res?.data?.status === 200) {
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

const subadminManagementSlice = createSlice({
  name: "subadmin",
  initialState,
  reducers: {
    logout: (state) => {
      (state.user = null),
        (state.error = null),
        window.localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    //add role
    builder.addCase(addRole.pending, (state) => {
      state.loader = true;
      state.addRole = {};
    });
    builder.addCase(addRole.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(addRole.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });

    //get roles
    builder.addCase(getRoles.pending, (state) => {
      state.loader = true;
      state.getRoles = {};
    });
    builder.addCase(getRoles.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(getRoles.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });

    //delete role
    builder.addCase(deleteRole.pending, (state) => {
      state.loader = true;
      state.deleteRole = {};
    });
    builder.addCase(deleteRole.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(deleteRole.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });

    //get subadmins
    builder.addCase(getSubadmin.pending, (state) => {
      state.loader = true;
      state.getSubadmin = {};
    });
    builder.addCase(getSubadmin.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(getSubadmin.rejected, (state, action) => {
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

    //delete subadmin
    builder.addCase(deleteSubadmin.pending, (state) => {
      state.loader = true;
      state.deleteSubadmin = {};
    });
    builder.addCase(deleteSubadmin.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(deleteSubadmin.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });

    //get subadmin details
    builder.addCase(subadminDetails.pending, (state) => {
      state.loader = true;
      state.subadminDetails = {};
    });
    builder.addCase(subadminDetails.fulfilled, (state, action) => {
      state.loader = false;
      state.user = action.payload.data;
    });
    builder.addCase(subadminDetails.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });
  },
});
export default subadminManagementSlice.reducer;
