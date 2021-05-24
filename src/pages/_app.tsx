import { ThemeProvider } from '@material-ui/core'
import { theme } from '../constants/theme'
import '@fontsource/rubik' // Defaults to weight 400.
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
