import {createSlice} from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
        price: action.payload.price,
        mrp: action.payload.mrp,
        quantity: action.payload.quantity,
        url: action.payload.url,
        productUniqueId: action.payload.productUniqueId
      });
    },
    removeProduct: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload.id)
      state.splice(index, 1)
    },
    updateQuantity: (state, action) => {
      const index = state.findIndex(product => product.productUniqueId === action.payload.productUniqueId)
      state[index].quantity = action.payload.quantity;
    }
  }
})

export const {addProduct, removeProduct, updateQuantity} = slice.actions;
export default slice.reducer;
