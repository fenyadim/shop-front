import axios from 'axios'

import { ITabs } from '@/types'

axios.defaults.baseURL = process.env.URL_BACK

export const tabsService = {
	async fetchTabs() {
		return await axios.get<{ data: ITabs[] }>(
			'/api/categoriesp?populate[0]=subcategories'
		)
	},
}
