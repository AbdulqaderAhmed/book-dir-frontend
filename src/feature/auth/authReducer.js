import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../api/backHttp";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkApi) => {
    try {
      const res = await http.post("/auth/register", userData);
      if (res.data) return res.data.user;
    } catch (error) {
      const message =
        (error.response.data &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkApi) => {
    try {
      const res = await http.post("/auth/login", userData);
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        return res.data.user;
      }
    } catch (error) {
      const message =
        (error.response.data &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isError: false,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isError = false;
        state.message = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isError = false;
        state.message = null;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      });
  },
});

export default authSlice.reducer;
