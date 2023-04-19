import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

import { Header } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import styles from './Cart.module.scss'

const Cart = () => {
	const { basket, priceTotal } = useAppSelector((state) => state.products)
	const route = useRouter()

	return (
		<>
			<Header>
				<h1>Корзина</h1>
				<div>
					<Link href={'/kosmetika'}>Назад</Link>
					<h1>Итого: {priceTotal}</h1>
				</div>
			</Header>
			<div>
				{basket.map(({ slug, price, count }) => (
					<Fragment key={slug}>
						<h1>{slug}</h1>
						<h3>{price}</h3>
						<h4>{count}</h4>
					</Fragment>
				))}
			</div>
		</>
	)
}

export default Cart
