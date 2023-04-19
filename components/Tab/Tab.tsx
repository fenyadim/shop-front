import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { ISimpleFetchingData, ITabs } from '@/@types'

import styles from './Tab.module.scss'

interface ITabsProps {
	categories: ITabs[] | ISimpleFetchingData[] | undefined
	isSubTab?: boolean
	activeTab: string | string[] | undefined
}

const Tab: React.FC<ITabsProps> = ({
	categories,
	isSubTab = false,
	activeTab,
}) => {
	const { query } = useRouter()

	return (
		<ul className={styles.tab_wrapper}>
			{categories?.map(({ slug, title }, index) => (
				<li
					key={`${slug}_${index}`}
					className={cn(styles.tab_item, {
						[styles.big]: !isSubTab,
						[styles.active]: activeTab === slug,
					})}
				>
					<Link href={!isSubTab ? `/${slug}` : `/${query.category}/${slug}`}>
						{title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Tab
