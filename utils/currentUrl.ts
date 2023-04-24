import { ParsedUrlQuery } from 'querystring'

export const currentUrl = (query: ParsedUrlQuery) =>
	query.subcategory
		? `/${query.category}/${query.subcategory}`
		: `/${query.category}`
