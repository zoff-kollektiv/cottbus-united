import Head from "next/head";
import React from "react";
import "@/styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default App;
