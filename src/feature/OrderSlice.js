import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../constant";
axios.defaults.withCredentials = true;

const initialState = {
  loading: false,
  data: null,
  countData: null,
  error: null,
};

export const createOrder = createAsyncThunk("createOrderApi", async (data) => {
  const response = await axios.post("/create_order", data[0], {
    headers: {
      Authorization: `Bearer ${data[1]}`,
    },
  });
  return response.data;
});

export const getAllOrders = createAsyncThunk(
  "getAllOrdersApi",
  async (token) => {
    const response = await axios.get("/get_all_orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

const OrderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = OrderSlice.actions;
export default OrderSlice.reducer;
