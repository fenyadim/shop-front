import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

<<<<<<< HEAD
import { Layout } from '@/components'

=======
>>>>>>> 95c5f5bfbc739f5e536d498ec5ffaf3d9a43886c
import store from '@/redux/store'

import { Layout } from '@/components/*'
import '@/styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default App
