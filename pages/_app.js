import Layout from '@/Components/Layout'
import '../styles/globals.css'
import { AuthProvider } from '@/context/context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp