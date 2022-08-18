import Layout from "components/atoms/Layout";
import CULogo from "src/assets/svgs/cu-logo";

const Landing = () => {
  return (
    <Layout className="bg-violet table">
      <div className="portrait:-rotate-90 portrait:md:rotate-0 max-h-[140vh] md:max-w-[100vh] md:mx-auto -mx-lg">
        <CULogo />
      </div>
    </Layout>
  );
};

export default Landing;
