import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <>
        <Head />

        <Html lang="ja">
          <body className="min-h-screen bg-gray-200 p-3">
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}

export default Document;
