import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { ISimpleFetchingData } from '@/@types'

import styles from './Tab.module.scss'

interface ITab {
	categories: ISimpleFetchingData[]
	isSubTab?: boolean
	activeTab: string | string[] | undefined
}

const Tab: React.FC<ITab> = ({ categories, isSubTab = false, activeTab }) => {
	const { query } = useRouter()

	return (
		<ul className={styles.tab_wrapper}>
			{categories.map(({ slug, title }, index) => (
				<li
					key={`${slug}_${index}`}
					className={cn(
						styles.tab_item,
						!isSubTab && styles.big,
						activeTab === slug && styles.active
					)}
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
