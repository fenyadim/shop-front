import { FC, PropsWithChildren } from 'react'

import { LinkButton } from '@/components'

import styles from './Header.module.scss'

interface IHeader extends PropsWithChildren {
	title: string
}

const Header: FC<IHeader> = ({ children, title }) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.header_title}>{title}</h1>
			<div className={styles.header_nav}>
				<LinkButton href={'/kosmetika'} title={'Назад'} />
				{children}
			</div>
		</header>
	)
}

export default Header
