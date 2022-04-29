import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import config from 'config'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LoadingScreen } from 'components/Layout/LoadingScreen'
import { Navbar } from 'components/Layout/Navbar'

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
          animate={{
            opacity: 0,
            transitionEnd: {
              display: 'none',
            },
          }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <LoadingScreen />
        </motion.div>
        <motion.div animate={{ x: -100 }} transition={{ duration: 0.2 }}>
          <div className="flex items-center justify-evenly fixed bg-gray-900 w-full h-full z-40"></div>
        </motion.div>
        <Navbar />
        <Component {...pageProps} />
      </React.Fragment>
    </>
  )
}

export default MyApp
