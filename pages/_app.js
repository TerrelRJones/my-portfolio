import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import "./_app.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 700;
    
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FSR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/img/fsrRellLogo.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
