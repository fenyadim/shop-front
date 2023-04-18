import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import Layout from '@/components/Layout/Layout'

import store from '@/redux/store'

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
