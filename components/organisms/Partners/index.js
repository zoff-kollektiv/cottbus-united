import clsx from "clsx";
import Layout from "components/atoms/Layout";
import ADBLogo from "src/assets/svgs/logos/ADB";
import BMFSFJLogo from "src/assets/svgs/logos/BMFSFJ";
import OpferperspektiveLogo from "src/assets/svgs/logos/Opferperspektive";

const Partners = () => {
  const PARTNERS = [
    { icon: <OpferperspektiveLogo />, size: 0.8 },
    { icon: <ADBLogo />, size: 0.8 },
    { icon: <BMFSFJLogo />, size: 1 },
  ];
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-xl items-center justify-center flex-wrap">
        {PARTNERS.map((partner, index) => (
          <div
            key={index}
            className={clsx("px-xs md:px-base", `w-[${800 * partner.size}px]`)}
          >
            {partner.icon}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Partners;
