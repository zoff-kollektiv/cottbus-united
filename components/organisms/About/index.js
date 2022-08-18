import clsx from "clsx";
import Layout from "components/atoms/Layout";
import useTranslation from "next-translate/useTranslation";
import { isRTL } from "src/lib/lib";

const Intro = () => {
  const { t, lang } = useTranslation();

  return (
    <Layout className="bg-white" id="about">
      <span
        className={clsx(
          "block text-red font-infra text-xs md:text-xl leading-tight"
        )}
        dangerouslySetInnerHTML={{ __html: t("about:text") }}
      />
    </Layout>
  );
};

export default Intro;
