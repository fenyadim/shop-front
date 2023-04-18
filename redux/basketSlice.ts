import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'

import { calcTotalPrice } from '@/utils/calcTotalPrice'
import { getBasketFromLS } from '@/utils/getBasketFromLS'

export interface IBasketData {
	slug: string
	price: number
	count: number
}

export interface IState {
	basket: IBasketData[] | []
	priceTotal: number
}

const items = getBasketFromLS() as IState

const initialState: IState = {
	basket: items.basket,
	priceTotal: items.priceTotal,
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		ADD_PRODUCT: (
			state: IState,
			{ payload }: PayloadAction<{ slug: string; price: number }>
		) => {
			const findItem = state.basket.find((obj) => obj.slug === payload.slug)
			if (findItem) {
				findItem.count++
			} else {
				return {
					...state,
					basket: [
						...state.basket,
						{ slug: payload.slug, price: payload.price, count: 1 },
					],
				}
			}
			state.priceTotal = calcTotalPrice(state.basket)
		},
		DELETE_PRODUCT: (state: IState, action: PayloadAction<string>) => {
			state.basket = state.basket.filter((item) => item.slug !== action.payload)
		},
		DECREASE_PRODUCT: (state: IState, action: PayloadAction<string>) => {
			const findItem = state.basket.find((obj) => obj.slug === action.payload)
			if (findItem) {
				findItem.count--
			}
		},
	},
})
export const { ADD_PRODUCT, DELETE_PRODUCT, DECREASE_PRODUCT } =
	productSlice.actions

export const getBasket = (state: RootState) => state.products.basket

export default productSlice.reducer
