import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='overflow-x-hidden'>
      <Head>
        <link rel="shortcut icon" href="/favicon/swami-favicon.jpg" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
