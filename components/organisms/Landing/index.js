import Layout from "components/atoms/Layout";
import CULogo from "src/assets/svgs/cu-logo";

const Landing = () => {
  return (
    <Layout className="bg-violet table">
      <div className="portrait:rotate-90 portrait:sm:rotate-0 max-w-[120vh] md:max-w-[100vh] mx-auto">
        <CULogo />
      </div>
    </Layout>
  );
};

export default Landing;
