import axios from 'axios'

axios.defaults.baseURL = process.env.URL_BACK

interface IAboutFetch {
	data: {
		content: string
	}
}

export const aboutService = {
	async fetchData() {
		return await axios.get<IAboutFetch>('/api/about')
	},
}
