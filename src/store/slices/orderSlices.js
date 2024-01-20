import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Создаем асинхронный thunk для отправки запроса
export const fetchData = createAsyncThunk("data/fetchData", async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

// Создаем slice
const orderSlice = createSlice({
  name: "order",
  initialState: {
    // начальное состояние
    status: "idle",
    data: null,
    error: null,
    discount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Добавляем обработчики для асинхронных событий
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
