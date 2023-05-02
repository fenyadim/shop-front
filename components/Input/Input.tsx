import cn from 'classnames'
import { FC } from 'react'
import InputMask from 'react-input-mask'

import styles from './Input.module.scss'
import { IInput } from './input.interface'

const Input: FC<IInput> = ({
	type = 'text',
	placeholder,
	title = placeholder,
	error,
	style,
	register,
	...props
}) => {
	return (
		<div
			className={cn(styles.field, {
				[styles.error]: error,
			})}
			style={style}
		>
			<span className={styles.label}>{title}</span>
			{type === 'tel' ? (
				<InputMask
					mask="+7(999)999-99-99"
					type={type}
					placeholder={placeholder}
					{...register}
					{...props}
				/>
			) : (
				<input type={type} placeholder={placeholder} {...register} {...props} />
			)}
			{error && <span className={styles.error_text}>{error.message}</span>}
		</div>
	)
}

export default Input
