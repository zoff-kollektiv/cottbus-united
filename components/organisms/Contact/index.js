import Layout from "components/atoms/Layout";
import { Fragment } from "react";
import ContactItem from "components/atoms/ContactItem";

const Contact = () => {
  const ITEMS = ["instagram", "whatsapp", "mail"];

  return (
    <Layout className="bg-red" id="contact">
      <ul className="flex flex-col md:flex-row gap-base md:gap-xs mx-auto items-center justify-center">
        {ITEMS.map((item, index) => (
          <Fragment key={index}>
            <ContactItem item={item} />
          </Fragment>
        ))}
      </ul>
    </Layout>
  );
};

export default Contact;
