import { Html, Head, Main, NextScript } from 'next/document'
import { Navbar } from 'components/Layout/Navbar'

import config from 'config'

export default function Document() {
  const title = config.meta.title(
    config.name,
    config.siteName,
    config.role,
    config.headline
  )

  return (
    <Html>
      <Head>
        <meta name="description" content={config.meta.description} />
        <meta name="keywords" content={config.meta.keywords.join(', ')} />
        <meta name="og:site_name" content={config.meta.opengraph?.siteName} />
        <meta name="og:title" content={title} />
        <meta name="og:url" content={config.meta.opengraph?.url} />
        <meta name="og:description" content={config.meta.description} />
        <meta name="og:image" content={config.meta.opengraph?.banner} />
      </Head>
      <body className="bg-primary-500 min-h-screen text-white">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
