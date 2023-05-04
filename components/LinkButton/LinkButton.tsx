import cn from 'classnames'
import { useRouter } from 'next/router'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './LinkButton.module.scss'

type ILinkButton = {
	href?: string
	isBig?: boolean
	isBordered?: boolean
	styleBtn?: 'border' | 'accent' | 'clear' | 'tab'
} & ButtonHTMLAttributes<HTMLButtonElement> &
	PropsWithChildren

const LinkButton: FC<ILinkButton> = ({
	href,
	isBig = false,
	isBordered = true,
	styleBtn = 'border',
	children,
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
				[styles.tab]: styleBtn === 'tab',
			})}
			{...rest}
		>
			{children}
		</button>
	)
}

export default LinkButton
