import Image from 'next/image'
import React from 'react'

import { IBasketData, getBasket } from '@/redux/basketSlice'
import { useAppSelector } from '@/redux/hooks'

import styles from './Menu.module.scss'

const Menu: React.FC = () => {
	const basket = useAppSelector(getBasket)

	const totalCount: number = (basket as IBasketData[]).reduce(
		(sum, item) => sum + item.count,
		0
	)

	return (
		<div className={styles.menu_wrapper}>
			<a href="#">
				<Image src="/image/message.svg" alt="Message" width={26} height={26} />
			</a>
			<a href="#" className={styles.basket_btn}>
				{totalCount > 0 && <span>{totalCount}</span>}
				<Image src="/image/basket.svg" alt="Basket" width={26} height={26} />
			</a>
			<a href="#">
				<Image src="/image/about.svg" alt="About" width={26} height={26} />
			</a>
		</div>
	)
}

export default Menu
