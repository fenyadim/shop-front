import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { HeadProvider, Layout } from '@/components'

import { persistor, store } from '@/redux/store'

import '@/styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PersistGate>
			</Provider>
		</HeadProvider>
	)
}

export default App
