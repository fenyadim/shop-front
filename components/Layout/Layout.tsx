import cn from 'classnames'
import localFont from 'next/font/local'
import Head from 'next/head'
import React, { ReactNode } from 'react'

import { Header, Menu } from '@/components'

import { IState } from '@/redux/basketSlice'
import { useAppSelector } from '@/redux/hooks'

import styles from './Layout.module.scss'

const jostFont = localFont({
	src: [
		{
			path: '../../public/fonts/Jost-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Jost-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Jost-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
})

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	const state: IState = useAppSelector((state) => state.products)
	const isMounted = React.useRef(false)

	React.useEffect(() => {
		if (isMounted) {
			// const json = JSON.stringify(state);
			// localStorage.setItem("basket", json);
			const jsonBasket = JSON.stringify(state.basket)
			localStorage.setItem('basket', jsonBasket)
		}
		isMounted.current = true
	}, [state])

	return (
		<>
			<Head>
				<title>Shop у Татьяны</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={cn(jostFont.className, styles.layout)}>
				<Header />
				<main>{children}</main>
				<Menu />
			</div>
		</>
	)
}

export default Layout
