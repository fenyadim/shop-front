import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { onlyText } from '@/utils/string/clearText'

import { ISeo } from './Meta.interface'
import { siteName, titleMerge } from '@/config/seo.config'

const Meta: FC<ISeo> = ({ title, description, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				<link rel="icon" href="/favicon.ico" />
				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={onlyText(description, 152)}
						/>
						<link rel="cannonical" href={currentUrl} />
						<meta property="og:locale" content="ru" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						{/* <meta property="og:image" content={image || logoImage} /> */}
						<meta property="og:site_name" content={siteName} />
						<meta
							property="og:description"
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
