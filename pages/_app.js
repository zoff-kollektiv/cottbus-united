import React from "react";
import "@/styles/global.css";
import Menu from "components/organisms/Menu";
import { Provider } from "src/lib/useAppContext";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

const App = ({ Component, pageProps }) => {
  const { t } = useTranslation();
  return (
    <Provider>
      <Head>
        <title>{t("global:seo-page-title")}</title>
      </Head>
      <Menu />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
