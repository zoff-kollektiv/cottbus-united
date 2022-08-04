import Layout from "components/atoms/Layout";
import { Fragment } from "react";
import ADBLogo from "src/assets/svgs/logos/ADB";
import BMFSFJLogo from "src/assets/svgs/logos/BMFSFJ";
import OpferperspektiveLogo from "src/assets/svgs/logos/Opferperspektive";

const Partners = () => {
  const PARTNERS = [<OpferperspektiveLogo/>, <ADBLogo/>, <BMFSFJLogo/>]
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-xl items-center">
        {PARTNERS.map((partner, index)=><div key={index} className="px-sm md:px-base">{partner}</div>)}
      </div>
    </Layout>
  );
};

export default Partners;
