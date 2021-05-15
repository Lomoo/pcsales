import { ThemeProvider } from '@material-ui/core';
import { theme } from '../constants/theme';

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
  
  export default MyApp;
  