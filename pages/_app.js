import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="http://localhost:8000/index.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
