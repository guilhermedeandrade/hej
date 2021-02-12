import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component className="subpixel-antialiased" {...pageProps} />
}

export default MyApp
