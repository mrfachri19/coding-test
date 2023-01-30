// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** API Import
import { getAllProduct } from "../api";

export const fetchProducts = createAsyncThunk(
  "appProducts/fetchProducts",
  async (search) => {
    const response = await getAllProduct(`/search?q=${search}`);
    const datas = response.data.products;
    return { datas, search };
  }
);

export const fetchProductsId = createAsyncThunk(
  "appProducts/fetchProductsId",
  async (id) => {
    const response = await getAllProduct(`/${id}`);
    const datas = response.data;
    return {
      datas,
      id,
    };
  }
);

export const appProductSlice = createSlice({
  name: "appProducts",
  initialState: {
    dataProducts: [],
    dataProductsId: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.dataProducts = action.payload;
      })
      .addCase(fetchProductsId.fulfilled, (state, action) => {
        state.dataProductsId = action.payload;
      });
  },
});

// export const {} = appProductSlice.actions;

export default appProductSlice.reducer;
