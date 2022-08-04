import Layout from "components/atoms/Layout";
import useTranslation from "next-translate/useTranslation";

const Participate = () => {
  const CTAS = Array(2).fill(0);

  const { t } = useTranslation();

  return (
    <Layout className="bg-white" id="participate">
      <div className="flex flex-col gap-base">
        {CTAS.map((_, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-xs">
            <div className="flex-1">
              <h3 className="font-infra transform-none text-base md:text-xl text-red font-bold leading-tight">
                {t(`participate:cta${index + 1}-title`)}
              </h3>
            </div>
            <div
              className="flex-1 text-red text-xs md:text-lg font-infra"
              dangerouslySetInnerHTML={{
                __html: t(`participate:cta${index + 1}-text`),
              }}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Participate;
