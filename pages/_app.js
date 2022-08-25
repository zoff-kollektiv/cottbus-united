import React, { useEffect } from "react";
import "@/styles/global.css";
import Menu from "components/organisms/Menu";
import { Provider } from "src/lib/useAppContext";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { isRTL } from "src/lib/lib";

const App = ({ Component, pageProps }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  useEffect(() => {
    let dir = isRTL(locale) ? "rtl" : "ltr";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", locale);
  }, [locale]);

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
