import { forwardRef } from 'react'

import styles from './Input.module.scss'
import { IInput } from './input.interface'

const Input = forwardRef<HTMLInputElement, IInput>(
	({ type = 'text', placeholder, error, style, ...rest }, ref) => {
		console.log(error)
		return (
			<div className={styles.field} style={style}>
				<input ref={ref} type={type} placeholder={placeholder} {...rest} />
				{error && <div>{error.message}</div>}
			</div>
		)
	}
)

Input.displayName = 'Input'

export default Input
