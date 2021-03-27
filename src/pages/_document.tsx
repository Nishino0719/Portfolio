import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <title>Nishino0719</title>
        <Head>
          {/* windows */}
          <meta
            name="msapplication-square70x70logo"
            content="/site-tile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/site-tile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/site-tile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/site-tile-310x310.png"
          />
          <meta name="msapplication-TileColor" content="#000" />
          {/* safari */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
          <meta name="apple-mobile-web-app-title" content="myapp" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon-180x180.png"
          />
          {/* 一般 */}
          <meta name="application-name" content="Portfolio" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content="Front / Mobile Engineer" />
          <meta name="twitter:title" content={'Nishino0719'} />
          <meta
            name="twitter:description"
            content={'Nishinoのポートフォリオ'}
          />
          <meta
            name="twitter:image"
            content={
              'https://avatars0.githubusercontent.com/u/55534054?s=460&u=402783902455ae84995129488dd3a12d0699fd84&v=4'
            }
          />
          <meta name="twitter:card" content="summary" />
          <meta property="og:title" content={'Nishinoのポートフォリオ'} />
          <meta property="og:description" content={'Nishinoのポートフォリオ'} />
          <meta
            property="og:image"
            content={
              'https://avatars0.githubusercontent.com/u/55534054?s=460&u=402783902455ae84995129488dd3a12d0699fd84&v=4'
            }
          />
          <link rel="icon" sizes="192x192" href="/icon-192x192.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// eslint-disable-next-line import/no-default-export
export default MyDocument
