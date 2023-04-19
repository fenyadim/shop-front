import { IBasketData } from '@/redux/basketSlice'

export const calcTotalPrice = (basket: IBasketData[]): number => {
	return basket.reduce((sum, obj) => obj.count * obj.price + sum, 0)
}
