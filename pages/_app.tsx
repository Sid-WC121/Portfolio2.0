import "styles/globals.css";
import Navigation from "components/Navigation";
import NoSSR from "components/NoSSR";
import ThemeProvider from "contexts/ThemeProvider";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Sid-WC121 | Portfolio2.0</title>
        <meta name="description" content="Portfolio-2.0" />
        <link rel='icon' href='images/Sid-WC121.ico'/>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
        <NoSSR>
          <Navigation />
        </NoSSR>
      </ThemeProvider>
    </>
  );
};

export default App;
