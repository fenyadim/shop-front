import { IState } from '@/redux/basketSlice'

import { calcTotalPrice } from './calcTotalPrice'

export const getBasketFromLS = () => {
	if (typeof window !== 'undefined') {
		const data = localStorage.getItem('basket')
		const basket: [] = data ? JSON.parse(data) : []
		const priceTotal = calcTotalPrice(basket)
		return {
			basket,
			priceTotal,
		}
	}
	return {
		basket: [],
		priceTotal: 0,
	}
}
