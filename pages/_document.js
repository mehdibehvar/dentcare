import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html dir='rtl' lang='faIr'>
      <Head>
      <link rel="icon" href="./assets/images.tooth.svg" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}