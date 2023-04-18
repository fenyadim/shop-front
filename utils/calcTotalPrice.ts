import { IBasketData } from '@/redux/basketSlice'

export const calcTotalPrice = (basket: IBasketData[]) => {
	return basket.reduce((sum, obj) => obj.count * obj.price + sum, 0)
}
