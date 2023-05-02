import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'

import { calcTotalPrice } from '@/utils/calcTotalPrice'

import { IProduct } from '@/types'

export interface IBasketData extends IProduct {
	count: number
}

export interface IStateRedux {
	basket: IBasketData[]
	priceTotal: number
}

const initialState: IStateRedux = {
	basket: [],
	priceTotal: 0,
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		ADD_PRODUCT: (state: IStateRedux, { payload }: PayloadAction<IProduct>) => {
			const findItem = state.basket.find((obj) => obj.slug === payload.slug)
			if (findItem) {
				findItem.count++
			} else {
				state.basket.push({ ...payload, count: 1 })
			}
			state.priceTotal = calcTotalPrice(state.basket)
		},
		DECREASE_PRODUCT: (state: IStateRedux, action: PayloadAction<string>) => {
			const findItem = state.basket.find((obj) => obj.slug === action.payload)
			if (findItem) {
				if (findItem.count > 1) {
					findItem.count--
				} else {
					state.basket = state.basket.filter(
						(item) => item.slug !== action.payload
					)
				}
				state.priceTotal = state.priceTotal - findItem?.price
			}
		},
		CLEAR: (state: IStateRedux) => {
			state.basket = []
			state.priceTotal = 0
		},
	},
})
export const { ADD_PRODUCT, DECREASE_PRODUCT, CLEAR } = productSlice.actions

export const getBasket = (state: RootState) => state.basket

export default productSlice.reducer
