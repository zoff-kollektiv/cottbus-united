import Layout from "components/atoms/Layout";
import useTranslation from "next-translate/useTranslation";
import useAppContext from "src/lib/useAppContext";
import clsx from "clsx";
import ArrowIcon from "src/assets/svgs/arrow";

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
        className="mx-auto flex items-center flex-col gap-xs uppercase font-barlow text-red text-xs md:text-sm zoom"
      >
        {t("global:imprint-button")}
        <div className={clsx("w-[50px]", showFooter && "rotate-180")}>
          <ArrowIcon />
        </div>
      </button>

      <span
        className={clsx(showFooter ? "block" : "hidden", "imprint")}
        dangerouslySetInnerHTML={{ __html: t("global:imprint-text") }}
      />
    </Layout>
  );
};

export default Footer;
