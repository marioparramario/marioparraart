import React from 'react';
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { useDarkMode } from '../components/useDarkMode'
import { GlobalStyles } from '../components/Globalstyle';
import { lightTheme, darkTheme } from '../components/Themes'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Toggle from '../components/Toggle';
import '../styles/normalize.scss';
import '../styles/layout.scss';
import '../styles/styles.scss';
import '../styles/footer.scss';
import '../styles/work.scss';
import '../styles/navbar.scss';
import '../styles/social.scss';
import '../styles/welcome.scss';
import "../styles/about.scss";

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' 
    ? lightTheme
    : darkTheme;
  const router = useRouter()

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />

          <Navbar />
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={handleExitComplete}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
