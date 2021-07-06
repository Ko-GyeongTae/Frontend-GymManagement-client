import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;