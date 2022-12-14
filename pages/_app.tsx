import React from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { MantineProvider, createEmotionCache } from '@mantine/core'

import 'styles/globals.scss'

import Head from 'next/head'

import dynamic from 'next/dynamic'
import splitbee from '@splitbee/web'

const Navbar = dynamic(() => import('components/Layout/Navbar'))

const mantineCache = createEmotionCache({ key: 'mantine' })

function MyApp ({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    splitbee.init({
      token: process.env.NEXTJS_SPLITBEE_TOKEN,
      disableCookie: false,
      scriptUrl: 'https://cdn.splitbee.io/sb.js',
      apiUrl: 'https://hive.splitbee.io'
    })
  }, [])

  return (
    <div>
      <Head>
        <title>
          Student Full Stack Developer from Delhi | Krish Gupta | krshkun
        </title>
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          cursorType: 'pointer',
          loader: 'bars'
        }}
        emotionCache={mantineCache}
      >
        <Navbar />
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  )
}

export function reportWebVitals (metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp
