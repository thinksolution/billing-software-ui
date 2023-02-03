import '@/styles/globals.css'
import Headers from './header'

export default function App({ Component, pageProps }) {
  return <><Headers></Headers>
  <Component {...pageProps} /></>
}
