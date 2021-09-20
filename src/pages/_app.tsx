import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../contexts/AuthContext";
import useWindowDimensions from '../hooks/useWindowDimensions';

import MobileVersion from '../components/MobileVersion';
import GlobalStyle from '../styles/global';
import theme from "../styles/theme";

const MyApp:React.FC<AppProps> = ({ Component, pageProps }) => {
  const { width } = useWindowDimensions();
  
  if(width < 700){
    return (
      <ThemeProvider theme={theme}>
        <MobileVersion />
        <GlobalStyle />
      </ThemeProvider>
    )
  }

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