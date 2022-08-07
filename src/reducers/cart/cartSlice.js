import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCount: 0,
  productsList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1;
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      state.productsList = state.productsList.filter( product => product.id !== productId );
      state.totalCount -= 1;
    },
  }
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;