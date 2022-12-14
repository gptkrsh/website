import * as React from 'react'

import { ServerStyles, createStylesServer, createGetInitialProps } from '@mantine/next'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()
const stylesServer = createStylesServer()

export default class _Document extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await getInitialProps(ctx)

    // Add your app specific logic here

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />
      ]
    }
  }

  render () {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Helping organisations build unforgettable seamless application. I focus on the frontend, and build exceptionally performant and accessible sites."
          />
          <meta
            name="keywords"
            content={['webdev', 'developer', 'open source', 'javascript'].join(
              ', '
            )}
          />
          <meta name="og:site_name" content="krshkun" />
          <meta
            name="og:title"
            content="Student Full Stack Developer from Delhi | Krish Gupta | krshkun"
          />
          <meta name="og:url" content="https://www.krshkun.eu.org" />
          <meta
            name="og:description"
            content="Helping organisations build unforgettable seamless application. I focus on the frontend, and build exceptionally performant and accessible sites."
          />
          <meta name="og:image" content="" />
          <link rel="preconnect" href="https://vitals.vercel-insights.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <body className="min-h-screen text-gray-400 bg-gray-900 min-w-[350px] overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
