import Layout from "components/atoms/Layout";
import ResourceItem from "components/atoms/ResourceItem";
import { Fragment } from "react";

const Resources = () => {
  const RESOURCES = ["posters", "booklets"];

  return (
    <Layout className="bg-violet" id="resources">
      <ul className="flex flex-col md:flex-row justify-center gap-base">
        {RESOURCES.map((resource, index) => (
          <Fragment key={index}>
            <ResourceItem resource={resource}/>
          </Fragment>
        ))}
      </ul>
    </Layout>
  );
};

export default Resources;
