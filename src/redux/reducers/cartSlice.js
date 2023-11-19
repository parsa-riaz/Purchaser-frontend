import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  checkout,
  deleteProductFromCart,
  getCart,
  updateCart,
} from "../actions/cartAction";

const initialState = {
  loading: false,
  cart: [],
  success: false,
  orderId: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleSuccess: (state) => {
      return {
        ...state,
        success: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addToCart.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.cartData[0];
      })
      .addCase(getCart.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.cart = action.payload.cartData[0];
      })
      .addCase(deleteProductFromCart.pending, (state, action) => {})
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        state.cart = action.payload.cartData[0];
      })
      .addCase(deleteProductFromCart.rejected, (state, action) => {})
      .addCase(checkout.fulfilled, (state, action) => {
        const { success, orderId } = action.payload;
        state.success = success;
        state.orderId = orderId;
      });
  },
});
export const { handleSuccess } = cartSlice.actions;
export default cartSlice.reducer;
