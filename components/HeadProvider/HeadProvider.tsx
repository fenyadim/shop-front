import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { FC, PropsWithChildren } from 'react'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextNProgress
				color="#ffc979"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1 maximum-scale=1.0"
				/>
				<meta name="theme-color" content={'#ffeed3'} />
				<meta name="msapplication-navbutton-color" content={'#ffeed3'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#ffeed3'}
				/>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
