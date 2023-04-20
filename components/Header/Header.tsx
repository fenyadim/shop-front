import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import { LinkButton } from '@/components'

import styles from './Header.module.scss'

<<<<<<< HEAD
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
=======
const Header: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Shop у Татьяны</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>{children}</header>
		</>
>>>>>>> 95c5f5bfbc739f5e536d498ec5ffaf3d9a43886c
	)
}

export default Header
