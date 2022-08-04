import Head from "next/head";
import React from "react";
import "@/styles/global.css";
import Menu from "components/organisms/Menu";
import { Provider } from "src/lib/useAppContext";
import useTranslation from "next-translate/useTranslation";

const App = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Head />
      <Menu />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
