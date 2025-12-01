import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UsersUiState } from "./types";

const initialState: UsersUiState = {
  selectedUserId: null,
  filter: { query: "", userType: undefined, sortBy: undefined },
};

const slice = createSlice({
  name: "usersUi",
  initialState,
  reducers: {
    selectUser(state, action: PayloadAction<string | null>) {
      state.selectedUserId = action.payload;
    },
    setFilter(state, action: PayloadAction<Partial<UsersUiState["filter"]>>) {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const { selectUser, setFilter } = slice.actions;
export default slice.reducer;
