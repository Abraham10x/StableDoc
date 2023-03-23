import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
export default function App({ Component, pageProps }: AppProps) {


  useEffect(() => {
  import('preline')
  }, [])
  return <Component {...pageProps} />
}
