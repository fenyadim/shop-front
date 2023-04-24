import { useRouter } from 'next/router'
import { FC, Fragment } from 'react'

import { LinkButton, Meta } from '@/components'

import { ISimpleFetchingData, ITabs } from '@/types'

import styles from './Tab.module.scss'

interface ITabsProps {
	categories: ITabs[] | ISimpleFetchingData[] | undefined
	isSubTab?: boolean
	activeTab: string | string[] | undefined
}

const Tab: FC<ITabsProps> = ({ categories, isSubTab = false, activeTab }) => {
	const { query } = useRouter()

	return (
		// <Meta title={activeTab === slug ? title : 'Магазин для дома'}>
		<div className={styles.tabs}>
			{categories?.map(({ slug, title }) => (
				<Fragment key={slug}>
					<LinkButton
						href={!isSubTab ? `/${slug}` : `/${query.category}/${slug}`}
						title={title}
						isBig={!isSubTab}
						isBordered={activeTab === slug}
					/>
				</Fragment>
			))}
		</div>
		// </Meta>
	)
}

export default Tab
