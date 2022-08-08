import Layout from "components/atoms/Layout";
import useTranslation from "next-translate/useTranslation";
import useAppContext from "src/lib/useAppContext";
import clsx from "clsx";

const Footer = () => {
  const {
    appState: { showFooter },
    setAppState,
  } = useAppContext();

  const { t } = useTranslation();

  return (
    <Layout className="bg-white" noPadding>
      <button
        onClick={() =>
          setAppState((prev) => ({ ...prev, showFooter: !showFooter }))
        }
        className="mx-auto block uppercase font-barlow text-red text-xs md:text-sm"
      >
        {t("default:imprint-button")}
      </button>

      <span
        className={clsx(showFooter ? "block" : "hidden")}
        dangerouslySetInnerHTML={{ __html: t("default:imprint-text") }}
      />
    </Layout>
  );
};

export default Footer;
