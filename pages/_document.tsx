import { Html, Head, Main, NextScript } from 'next/document'
import { IncomingMessage, ServerResponse } from 'http'

export default function Document() {
  return (
    <Html lang='en'>
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
      </Head>
      <body className="min-h-screen text-gray-400 bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export async function getServerSideProps({ _req: IncomingResponse, res: ServerResponse }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}
