import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Navbar } from 'components/Layout/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>
          Student Full Stack Developer from Delhi | Krish Gupta | krshkodes
        </title>
      </Head>
      <React.Fragment>
        <Navbar />
        <Component {...pageProps} />
      </React.Fragment>
    </div>
  )
}

export default MyApp
