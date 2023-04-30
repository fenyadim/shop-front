import { FC, PropsWithChildren } from 'react'

import { LinkButton, Meta } from '@/components'

import styles from './Header.module.scss'

interface IHeader extends PropsWithChildren {
	title: string
	desc?: string
}

const Header: FC<IHeader> = ({ children, title, desc }) => {
	return (
		<>
			<Meta title={title} description={desc} />
			<header className={styles.header}>
				<h1 className={styles.header_title}>{title}</h1>
				<div className={styles.header_nav}>
					<LinkButton href={'/kosmetika'}>Назад</LinkButton>
					{children}
				</div>
			</header>
		</>
	)
}

export default Header
