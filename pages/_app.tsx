import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import config from 'config'

function MyApp({ Component, pageProps }: AppProps) {
  const title = config.meta.title(
    config.name,
    config.siteName,
    config.role,
    config.headline
  )

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
