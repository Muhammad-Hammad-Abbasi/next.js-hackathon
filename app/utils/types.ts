// types.ts
export interface CartItem {
    _id: string; // Use 'string' if your IDs are strings (e.g., MongoDB ObjectIDs)
    title: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }