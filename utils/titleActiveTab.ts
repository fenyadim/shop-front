import { ParsedUrlQuery } from 'querystring'

import { ITabs } from '@/types'

export const titleActiveTab = (tabs: ITabs[], query: ParsedUrlQuery) =>
	tabs
		? tabs.find(({ slug }) => query.category === slug)?.title
		: 'Магазин косметики'
