// app/store/features/wishlistSlice.ts
import { Product } from "@/app/multiy-components/productlistpage/shop-cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: Product[]; // Wishlist mein products store honge
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // Add item to wishlist
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i._id === item._id);
      if (!existingItem) {
        state.items.push(item); // Agar item pehle se nahi hai, to add karo
      }
    },
    // Remove item from wishlist
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    // Clear wishlist
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

// Export reducer
export default wishlistSlice.reducer;