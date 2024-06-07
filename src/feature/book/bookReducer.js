import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../api/backHttp.js";

export const getAllBooks = createAsyncThunk(
  "book/getAllBooks",
  async (thunkApi) => {
    try {
      const res = await http.get(`/book/`);
      if (res.data) {
        return res.data.books;
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

export const addBooks = createAsyncThunk(
  "book/addBooks",
  async (bookData, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      const res = await http.post("/book/", bookData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `multipart/form-data`,
        },
      });

      if (res.data) {
        return res.data.book;
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

const initialState = {
  books: null,
  isLoading: false,
  isError: false,
  message: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builders) => {
    builders
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
        state.isError = false;
        state.message = null;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
        state.isError = false;
        state.message = null;
      })
      .addCase(addBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default bookSlice.reducer;
