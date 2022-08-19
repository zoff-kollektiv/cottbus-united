import clsx from "clsx";
import Layout from "components/atoms/Layout";
import ADBLogo from "src/assets/svgs/logos/ADB";
import BMFSFJLogo from "src/assets/svgs/logos/BMFSFJ";
import OpferperspektiveLogo from "src/assets/svgs/logos/Opferperspektive";

const Partners = () => {
  const PARTNERS = [
    { icon: <OpferperspektiveLogo />, size: 1, link: "https://www.opferperspektive.de/home" },
    { icon: <ADBLogo />, size: 0.6, link: "https://www.antidiskriminierungsberatung-brandenburg.de/homeseite/"},
    { icon: <BMFSFJLogo />, size: 1.8, link: "https://www.demokratie-leben.de/" },
  ];
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-xl items-center justify-center flex-wrap">
        {PARTNERS.map((partner, index) => (
          <a
            key={index}
            className={clsx("flex-1 w-4xl flex justify-center")}
            href={partner.link}
          >
            {partner.icon}
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Partners;
