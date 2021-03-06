import Document, { Html, Head, Main, NextScript } from "next/document"


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin />

          <link rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" />

          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
            media="print" onLoad="this.media='all'" />

          <noscript>
            <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" />
          </noscript>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument