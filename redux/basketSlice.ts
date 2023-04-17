import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { getBasketFromLS } from "@/utils/getBasketFromLS";

export interface IBasketData {
  slug: string;
  count: number;
}

interface IInitialState {
  basket: IBasketData[] | [];
  countTotal: number;
}

const items = getBasketFromLS();

console.log(items);

const initialState: IInitialState = {
  basket: items?.basket,
  countTotal: items?.countTotal,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    ADD_PRODUCT: (state: IInitialState, action: PayloadAction<string>) => {
      return {
        ...state,
        basket: [...state.basket, { slug: action.payload, count: 1 }],
        countTotal: state.countTotal + 1,
      };
    },
    DELETE_PRODUCT: (state: IInitialState, action: PayloadAction<string>) => {
      state.basket = state.basket.filter(
        (item) => item.slug !== action.payload
      );
    },
    INCREASE_PRODUCT: (state: IInitialState, action: PayloadAction<string>) => {
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.slug === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
        countTotal: state.countTotal + 1,
      };
    },
    DECREASE_PRODUCT: (state: IInitialState, action: PayloadAction<string>) => {
      const basketItem: IBasketData = state.basket.find(
        (item) => item.slug === action.payload
      );
      basketItem.count = basketItem.count - 1;
    },
  },
});
export const {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} = productSlice.actions;

export const getBasket = (state: RootState) => state.products.basket;
export const getTotalCount = (state: RootState) => state.products.countTotal;

export default productSlice.reducer;
