import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(0, quantity); // Ensure quantity does not go below 0
        if (item.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id); // Remove item if quantity is 0
        }
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId); // Remove item by ID
    },
  },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
