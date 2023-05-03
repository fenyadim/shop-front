import { useRouter } from 'next/router'
import { FC, Fragment, useEffect, useState } from 'react'

import { LinkButton } from '@/components'

import { ISimpleFetchingData, ITabs } from '@/types'

import styles from './Tab.module.scss'

interface ITabsProps {
	categories: ITabs[] | ISimpleFetchingData[] | undefined
	isSubTab?: boolean
	activeTab: string | string[] | undefined
}

const Tab: FC<ITabsProps> = ({ categories, isSubTab = false, activeTab }) => {
	const { query } = useRouter()
	const [active, setActive] = useState<string | string[] | undefined>('')

	useEffect(() => {
		if (activeTab) {
			setActive(activeTab)
		}
	}, [activeTab])

	return (
		<div className={styles.tabs}>
			{categories?.map(({ slug, title }) => (
				<Fragment key={slug}>
					<LinkButton
						href={!isSubTab ? `/${slug}` : `/${query.category}/${slug}`}
						isBig={!isSubTab}
						isBordered={active === slug}
					>
						{title}
					</LinkButton>
				</Fragment>
			))}
		</div>
	)
}

export default Tab
