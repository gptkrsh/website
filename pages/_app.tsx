import React from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

import dynamic from 'next/dynamic'
import splitbee from '@splitbee/web'

import { MantineProvider, createEmotionCache, AppShell } from '@mantine/core'

import Head from 'next/head'
import LoadProgress from 'components/Layout/LoadProgress'
const MenuHeader = dynamic(() => import('components/Layout/MenuHeader'))

const mantineCache = createEmotionCache({ key: 'mantine' })

function App ({ Component, pageProps }: AppProps) {
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
          loader: 'bars',
          primaryColor: 'violet'
        }}
        emotionCache={mantineCache}
      >
        <LoadProgress />
        <AppShell header={<MenuHeader />}>
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </div>
  )
}

export function reportWebVitals (metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default App
