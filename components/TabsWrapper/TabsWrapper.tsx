import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { Meta, Tab } from '@/components'

import { titleActiveTab } from '@/utils/titleActiveTab'

import { ISimpleFetchingData, ITabs } from '@/types'

import styles from './TabsWrapper.module.scss'

const TabsWrapper: FC<{ tabs: ITabs[] }> = ({ tabs }) => {
	const [subTabs, setSubTabs] = useState<
		ISimpleFetchingData[] | [] | undefined
	>([])
	const { query } = useRouter()

	console.log(query)

	useEffect(() => {
		const find = tabs.find((item) => item.slug === query.category)
		if (find) {
			setSubTabs(find?.subcategories)
		}
	}, [tabs, query.category])

	return (
		<Meta
			title={titleActiveTab(tabs, query) as string}
			description="Магазин в котором найдется все"
		>
			<div className={styles.tabs_wrapper}>
				<Tab categories={tabs} activeTab={query.category} />
				<Tab
					categories={subTabs}
					activeTab={query.subcategory && query.subcategory[0]}
					isSubTab
				/>
			</div>
		</Meta>
	)
}

export default TabsWrapper
