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
        quantity: action.payload.quantity
      });
    },
    removeProduct: (state, action) => {
      console.log(action.payload.id)
      const filteredProducts = state.find((item) => {
        return item.id === action.payload.id;
      });
      console.log(filteredProducts)
      const index = state.findIndex(product => product.id === action.payload.id)
      state.splice(index, 1)
      // console.table(filteredProducts)
    }
  }
})

export const {addProduct, removeProduct} = slice.actions;
export default slice.reducer;
