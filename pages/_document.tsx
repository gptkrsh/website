import * as React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document () {
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
        <meta name="og:site_name" content="krshkodes" />
        <meta
          name="og:title"
          content="Student Full Stack Developer from Delhi | Krish Gupta | krshkodes"
        />
        <meta name="og:url" content="https://www.krshkodes.co" />
        <meta
          name="og:description"
          content="Helping organisations build unforgettable seamless application. I focus on the frontend, and build exceptionally performant and accessible sites."
        />
        <meta name="og:image" content="" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <Script
          data-no-cookie
          strategy='worker'
          type="text/partytown"
          async
          src="https://cdn.splitbee.io/sb.js"
        ></Script>
      </Head>
      <body className="min-h-screen text-gray-400 bg-gray-900 min-w-[350px] overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
