import Layout from '../components/Layout'
import '../styles/globals.css'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5N5VDRT' })
  }, [])
  return (
    <ToastProvider
      placement="bottom-right">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  )
}

export default MyApp
