import cn from 'classnames'
import { useRouter } from 'next/router'
import { ButtonHTMLAttributes, FC } from 'react'

import styles from './LinkButton.module.scss'

interface ILinkButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
	href?: string
	isBig?: boolean
	isBordered?: boolean
	styleBtn?: 'border' | 'accent' | 'clear'
}

const LinkButton: FC<ILinkButton> = ({
	title,
	href,
	isBig = false,
	isBordered = true,
	styleBtn = 'border',
	...rest
}) => {
	const { push } = useRouter()

	return (
		<button
			onClick={() => href && push(href)}
			className={cn(styles.button_link, {
				[styles.big]: isBig,
				[styles.active]: isBordered,
				[styles.accent]: styleBtn === 'accent',
				[styles.clear]: styleBtn === 'clear',
			})}
			{...rest}
		>
			{title}
		</button>
	)
}

export default LinkButton
