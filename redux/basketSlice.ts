import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IState {
  productSlug: string;
  count: number;
}

const initialState: IState[] = [
  {
    productSlug: "test",
    count: 1,
  },
];

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    ADD_PRODUCT: (state: IState[], action: PayloadAction<string>) => {
      state.push({ productSlug: action.payload, count: 1 });
    },
  },
});
export const { ADD_PRODUCT } = basketSlice.actions;

export default basketSlice.reducer;
