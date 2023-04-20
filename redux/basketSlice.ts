import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'

import { calcTotalPrice } from '@/utils/calcTotalPrice'
import { getBasketFromLS } from '@/utils/getBasketFromLS'

import { IProduct } from '@/types'

export interface IBasketData extends IProduct {
	count: number
}

export interface IState {
	basket: IBasketData[]
	priceTotal: number
}

const items = getBasketFromLS() as IState

const initialState: IState = {
	basket: [],
	priceTotal: 0,
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		ADD_PRODUCT: (state: IState, { payload }: PayloadAction<IProduct>) => {
			const findItem = state.basket.find((obj) => obj.slug === payload.slug)
			if (findItem) {
				findItem.count++
			} else {
				state.basket.push({ ...payload, count: 1 })
			}
			state.priceTotal = calcTotalPrice(state.basket)
		},
		DECREASE_PRODUCT: (state: IState, action: PayloadAction<string>) => {
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
	},
})
export const { ADD_PRODUCT, DECREASE_PRODUCT } = productSlice.actions

export const getBasket = (state: RootState) => state.products.basket

export default productSlice.reducer
