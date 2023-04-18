import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { getBasketFromLS } from '@/utils/getBasketFromLS';

export interface IBasketData {
  slug: string;
  count: number;
}

export interface IState {
  basket: IBasketData[] | [];
  countTotal: number;
}

const items = getBasketFromLS();

console.log(items);

const initialState: IState = {
  basket: items?.basket,
  countTotal: items?.countTotal,
};

enum Operation {
  plus,
  minus,
}

const changeCount = (state: IState, { payload }: PayloadAction<string>, operation: Operation) => {
  const basketItem = state.basket.find((item) => item.slug === payload) as IBasketData;
  basketItem.count = operation === Operation.plus ? basketItem.count + 1 : basketItem.count - 1;
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    ADD_PRODUCT: (state: IState, action: PayloadAction<string>) => {
      return {
        ...state,
        basket: [...state.basket, { slug: action.payload, count: 1 }],
        countTotal: state.countTotal + 1,
      };
    },
    DELETE_PRODUCT: (state: IState, action: PayloadAction<string>) => {
      state.basket = state.basket.filter((item) => item.slug !== action.payload);
    },
    INCREASE_PRODUCT: (state: IState, action: PayloadAction<string>) => {
      changeCount(state, action, Operation.plus);
    },
    DECREASE_PRODUCT: (state: IState, action: PayloadAction<string>) => {
      changeCount(state, action, Operation.minus);
    },
  },
});
export const { ADD_PRODUCT, DELETE_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT } =
  productSlice.actions;

export const getBasket = (state: RootState) => state.products.basket;
export const getTotalCount = (state: RootState) => state.products.countTotal;

export default productSlice.reducer;
