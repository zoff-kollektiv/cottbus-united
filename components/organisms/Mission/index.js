import Layout from "components/atoms/Layout";
import MissionItem from "components/molecules/MissionItem";
import { Fragment } from "react";

const Mission = () => {
  const ITEMS = Array(3).fill(0);

  return (
    <Layout className="bg-violet" id="mission">
      <ul className="flex flex-col gap-base">
        {ITEMS.map((_, index) => (
          <Fragment key={index}>
            <MissionItem index={index} />
          </Fragment>
        ))}
      </ul>
    </Layout>
  );
};

export default Mission;
