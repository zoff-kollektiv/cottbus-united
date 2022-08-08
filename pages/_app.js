import Head from "next/head";
import React from "react";
import "@/styles/global.css";
import Menu from "components/organisms/Menu";
import { Provider } from "src/lib/useAppContext";
import useTranslation from "next-translate/useTranslation";

const App = ({ Component, pageProps }) => {
  const { t } = useTranslation();
  return (
    <Provider>
      <Head>
        <title>{t("global:seo-page-title")}</title>
        <meta name="description" content={t("global:seo-description")} />
        <meta name="tags" content={t("global:seo-tags")} />
        <meta name="author" content="Cottbus United – Opferperspektive e.V." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cottbus-united.net" />
        <meta
          property="og:image"
          content="https://main--cottbus-united.netlify.app/static/images/cottbus-united-opengraph.jpg"
        />
        <link rel="shortcut icon" href="/static/images/favicon.png" />
      </Head>
      <Menu />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
