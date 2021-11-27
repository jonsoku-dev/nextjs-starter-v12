import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { defaultTheme } from '@/utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0
  }`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
