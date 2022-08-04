import Layout from "components/atoms/Layout";
import useTranslation from "next-translate/useTranslation";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <Layout className="bg-white" id="about">
      <span
        className="text-red font-infra text-xs md:text-xl leading-tight"
        dangerouslySetInnerHTML={{ __html: t("about:text") }}
      />
    </Layout>
  );
};

export default Intro;
