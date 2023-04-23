import { useRouter } from 'next/router'
import { FC, Fragment } from 'react'

import { FormOrder, Header, ProductItem } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import styles from './Cart.module.scss'

const Cart: FC = () => {
	const { basket, priceTotal } = useAppSelector((state) => state.products)
	return (
		<>
			<Header title={'Корзина'}>
				<h2 className={styles.total_sum}>Итого: {priceTotal} руб.</h2>
			</Header>
			{basket.length ? (
				<div
					style={{ height: '70vh', overflowY: 'scroll', padding: '1px 20px' }}
				>
					<div className={styles.basket_wrapper}>
						{basket.map(({ brand, volume, slug, price, name, image }) => (
							<Fragment key={slug}>
								<ProductItem
									slug={slug}
									image={image}
									name={name}
									brand={brand}
									volume={volume}
									price={price}
									isHorizont
								/>
							</Fragment>
						))}
					</div>
					<FormOrder basket={basket} priceTotal={priceTotal} />
				</div>
			) : (
				<h2>Корзина пуста!</h2>
			)}
		</>
	)
}

export default Cart
