import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from 'components/Layout/Navbar'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-primary-500 min-h-screen text-white">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
