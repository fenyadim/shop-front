import cn from 'classnames'
import localFont from 'next/font/local'
import { FC, PropsWithChildren } from 'react'

import { Menu } from '@/components'

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

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<div className={cn(jostFont.className, styles.layout)}>
				{children}
				<Menu />
			</div>
		</>
	)
}

export default Layout
