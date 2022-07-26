import { Head, Html, Main, NextScript } from "next/document";
import useTranslation from "next-translate/useTranslation";

const Document = () => {
  const { t } = useTranslation();

  return (
    <Html>
      <Head>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
