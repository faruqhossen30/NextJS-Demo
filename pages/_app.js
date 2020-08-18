
import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/Navbar'))

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <DynamicComponent />
        <Component {...pageProps} />
    </>
  )
}


export default MyApp
