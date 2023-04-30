import cn from 'classnames'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import InputMask from 'react-input-mask'

import { animateVariable } from '@/utils/animateVariable'

import styles from './Input.module.scss'
import { IInput } from './input.interface'

const Input = forwardRef<HTMLInputElement, IInput>(
	(
		{ type = 'text', placeholder, title = placeholder, error, style, ...rest },
		ref
	) => {
		return (
			<motion.div
				variants={animateVariable('x', 30, 0.2)}
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
						{...rest}
					>
						<input ref={ref} />
					</InputMask>
				) : (
					<input ref={ref} type={type} placeholder={placeholder} {...rest} />
				)}
				{error && <span className={styles.error_text}>{error.message}</span>}
			</motion.div>
		)
	}
)

Input.displayName = 'Input'

export default Input
