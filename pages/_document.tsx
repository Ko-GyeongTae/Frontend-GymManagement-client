import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='ko' style={{ overflow: 'hidden' }}>
        <Head />
        <body style={{ margin: 0, width: '100vw', height: '100vh', position: 'fixed', bottom: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument