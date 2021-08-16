import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../contexts/AuthContext";

import GlobalStyle from '../styles/global';
import theme from "../styles/theme";

const MyApp:React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp;