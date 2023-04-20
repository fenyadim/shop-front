import { useRouter } from 'next/router'
import { FC, Fragment } from 'react'

import { LinkButton } from '@/components'

import { ISimpleFetchingData, ITabs } from '@/@types'

import styles from './Tab.module.scss'

interface ITabsProps {
	categories: ITabs[] | ISimpleFetchingData[] | undefined
	isSubTab?: boolean
	activeTab: string | string[] | undefined
}

const Tab: FC<ITabsProps> = ({ categories, isSubTab = false, activeTab }) => {
	const { query } = useRouter()

	return (
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
	)
}

export default Tab
