import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import styles from './LinkButton.module.scss'

interface ILinkButton {
	title: string
	href: string
	isBig?: boolean
	isBordered?: boolean
}

const LinkButton: FC<ILinkButton> = ({
	title,
	href,
	isBig = false,
	isBordered = true,
}) => {
	return (
		<Link
			href={href}
			className={cn(styles.button_link, {
				[styles.big]: isBig,
				[styles.active]: isBordered,
			})}
		>
			{title}
		</Link>
	)
}

export default LinkButton
