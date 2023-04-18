import { useRouter } from 'next/router'
import React from 'react'

import { Tab } from '@/components'

import { ISimpleFetchingData } from '@/@types'

import styles from './Header.module.scss'

interface ITabs extends ISimpleFetchingData {
	subcategories: ISimpleFetchingData[]
}

const Header: React.FC = () => {
	const [tabs, setTabs] = React.useState<ITabs[] | []>([])
	const [subTabs, setSubTabs] = React.useState<ISimpleFetchingData[] | []>([])
	const { query } = useRouter()

	React.useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`${process.env.URL_BACK}/api/categoriesp?populate[0]=subcategories`
			)
			const { data } = await res.json()
			setTabs(data)
		}
		fetchData().catch(console.error)
	}, [])

	React.useEffect(() => {
		tabs.map(({ slug, subcategories }) => {
			if (slug === query.category) {
				setSubTabs(subcategories)
			}
		})
	}, [query.category, tabs])

	return (
		<header className={styles.header}>
			<Tab categories={tabs} activeTab={query.category} />
			<Tab categories={subTabs} activeTab={query.subcategory} isSubTab />
		</header>
	)
}

export default Header
