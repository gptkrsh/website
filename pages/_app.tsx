import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import config from 'config'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LoadingScreen } from 'components/Layout/LoadingScreen'
import { Navbar } from 'components/Layout/Navbar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const title = config.meta.title(
    config.name,
    config.siteName,
    config.role,
    config.headline.join(' ')
  )

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <React.Fragment>
        <motion.div
          initial="visible"
          animate="hidden"
          variants={{
            hidden: {
              opacity: 0,
              zIndex: -50,
              transitionEnd: {
                display: 'none'
              }
            },
            visible: {
              opacity: 1,
            },
          }}
          transition={{ ease: 'easeOut', delay: 1.5, duration: .5 }}
        >
          <LoadingScreen />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          transition={{ ease: 'easeOut', delay: 2, duration: .5 }}
        >
          <Navbar />
          <Component {...pageProps} />
        </motion.div>
      </React.Fragment>
    </>
  )
}

export default MyApp
