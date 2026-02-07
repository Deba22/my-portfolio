import Layout from '../components/Layout'
import '../styles/globals.css'

import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5N5VDRT' })
  }, [])
  return (

      <Layout>
        <Component {...pageProps} />
      </Layout>

  )
}


export default MyApp
