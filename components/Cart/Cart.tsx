import { useRouter } from 'next/router'
import { FC, Fragment } from 'react'
import { useForm } from 'react-hook-form'

import { Header, Input, ProductItem } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import { nameReg, phoneReg } from '../Input/regular'

import styles from './Cart.module.scss'

interface FormValues {
	phone: string
	name: string
	city: string
	street: string
	house: string
	apartment: string
}

const Cart: FC = () => {
	const { basket, priceTotal } = useAppSelector((state) => state.products)
	const route = useRouter()

	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
		reset,
	} = useForm<FormValues>({
		mode: 'onChange',
	})

	const submit = (e: SubmitEvent) => {
		e.preventDefault()
		console.log(e)
	}

	return (
		<>
			<Header title={'Корзина'}>
				<h2 className={styles.total_sum}>Итого: {priceTotal} руб.</h2>
			</Header>
			<div className={styles.basket_wrapper}>
				{basket.length ? (
					basket.map(({ brand, volume, slug, price, name, image }) => (
						<Fragment key={slug}>
							<ProductItem
								slug={slug}
								image={image}
								name={name}
								brand="Carslan"
								volume={volume}
								price={price}
								isHorizont
							/>
						</Fragment>
					))
				) : (
					<h2>В корзине пусто!</h2>
				)}
			</div>
			<div>
				<form onSubmit={handleSubmit(submit)} method="post">
					<Input
						{...register('phone', {
							required: 'Введите телефон',
							pattern: {
								value: phoneReg,
								message: 'Введите корректный номер',
							},
						})}
						placeholder="Телефон"
						error={errors.phone}
					/>
					<Input
						{...register('name', {
							required: true,
							pattern: {
								value: nameReg,
								message: 'Введите ФИО',
							},
						})}
						placeholder="ФИО"
						error={errors.name}
					/>
					<Input
						{...register('city', { required: 'Введите город/поселок' })}
						placeholder="Город/Поселок"
						error={errors.city}
					/>
					<Input
						{...register('street', {})}
						placeholder="Улица"
						error={errors.street}
					/>
					<Input
						{...register('house', { required: 'Введите дом' })}
						placeholder="Дом"
						error={errors.house}
					/>
					<Input
						{...register('apartment', { required: 'Введите квартиру' })}
						placeholder="Квартира"
						error={errors.apartment}
					/>
					<button type="submit">Оформить заказ</button>
				</form>
			</div>
		</>
	)
}

export default Cart
