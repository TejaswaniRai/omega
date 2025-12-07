import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Import model-viewer for 3D support */}
        <script 
          type="module" 
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
