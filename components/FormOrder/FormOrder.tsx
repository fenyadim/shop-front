import { motion } from 'framer-motion'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Input, LinkButton } from '@/components'

import { CLEAR, IStateRedux } from '@/redux/basketSlice'
import { useAppDispatch } from '@/redux/hooks'

import { variants } from '@/constans/animate'

import { productsService } from '@/services/products.service'

import { animateVariable } from '@/utils/animateVariable'

import { IFormValues } from '@/types'

import styles from './FormOrder.module.scss'
import { nameReg, phoneReg } from './regular'

const FormOrder: FC<IStateRedux> = ({ priceTotal, basket }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<IFormValues>({
		mode: 'onChange',
	})
	const dispatch = useAppDispatch()

	const submit: SubmitHandler<IFormValues> = async (formData) => {
		try {
			await productsService.postOrder(formData, priceTotal, basket)
			toast.success('Ваш заказ успешно создан!')
			// dispatch(CLEAR())
		} catch (error: any) {
			toast.error('Проблемы с сервером. Пожалуйста, подождите!')
		}
	}
	return (
		<form
			// variants={variants}
			// initial="hidden"
			// animate="show"
			className={styles.form}
			onSubmit={handleSubmit(submit)}
			// method="post"
		>
			<Input
				type="tel"
				placeholder="+7(___)___-__-__"
				title="Телефон"
				error={errors.phone}
				register={{
					...register('phone', {
						required: 'Введите телефон',
						pattern: {
							value: phoneReg,
							message: 'Введите корректный номер',
						},
					}),
				}}
			/>
			<Input
				title="ФИО"
				placeholder="Например, Иванов Иван Иванович"
				error={errors.name}
				register={{
					...register('name', {
						required: 'Введите ФИО',
						pattern: {
							value: nameReg,
							message: 'Введите ФИО',
						},
					}),
				}}
			/>
			<Input
				register={{
					...register('city', { required: 'Введите город/поселок' }),
				}}
				title="Город/Поселок"
				placeholder="Например, г. Москва"
				error={errors.city}
			/>
			<Input
				register={{ ...register('street') }}
				title="Улица"
				placeholder="Например, ул.Пушкина"
				error={errors.street}
			/>
			<div
				style={{
					display: 'grid',
					gap: '10px',
					gridTemplateColumns: '1fr 1fr',
				}}
			>
				<Input
					register={{ ...register('house', { required: 'Введите дом' }) }}
					title="Дом"
					placeholder="Например, д.45/4"
					error={errors.house}
				/>
				<Input
					register={{
						...register('apartment', { required: 'Введите квартиру' }),
					}}
					title="Квартира"
					placeholder="Например, кв.24"
					error={errors.apartment}
				/>
			</div>
			<div
				// variants={animateVariable('y', -30, 0.2)}
				style={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<LinkButton
					type="submit"
					// disabled={!isValid}
					styleBtn="accent"
				>
					Оформить заказ
				</LinkButton>
				<LinkButton styleBtn="clear" onClick={() => dispatch(CLEAR())}>
					Очистить корзину
				</LinkButton>
			</div>
		</form>
	)
}

export default FormOrder
