import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://5914f2232e79.ngrok.io/index.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
