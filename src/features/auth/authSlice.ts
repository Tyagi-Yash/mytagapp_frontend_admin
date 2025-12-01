import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = { id: string; email: string; name?: string } | null;
type AuthState = { token: string | null; user: User };

const tokenFromStorage = typeof window !== "undefined" ? localStorage.getItem("token") : null;

const initialState: AuthState = {
  token: tokenFromStorage,
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ token: string; user: User }>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    clearAuth(state) {
      state.token = null;
      state.user = null;
      if (typeof window !== "undefined") localStorage.removeItem("token");
    },
  },
});

export const { setAuth, setToken, setUser, clearAuth } = slice.actions;
export default slice.reducer;
