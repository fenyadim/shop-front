import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import localFont from 'next/font/local'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

const variants = {
	initialState: {
		opacity: 0,
	},
	animateState: {
		opacity: 1,
	},
	exitState: { opacity: 0 },
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const route = useRouter()

	return (
		<AnimatePresence>
			<ToastContainer />
			<motion.div
				key={route.route}
				variants={variants}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{
					duration: 0.2,
				}}
				className={cn(jostFont.className, styles.layout)}
			>
				{children}
				<Menu />
			</motion.div>
		</AnimatePresence>
	)
}

export default Layout
