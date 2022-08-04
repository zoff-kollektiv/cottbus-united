import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Link } from "react-scroll";

const MenuItem = ({ item }) => {
  const { t } = useTranslation();

  return (
    <li>
      <Link
        to={item}
        smooth={true}
        duration={700}
        className="uppercase text-red font-bold font-barlow text-sm cursor-pointer block hover:scale-110 transition-all duration-200 ease-in-out"
      >
        {t(`menu:${item}`)}
      </Link>
    </li>
  );
};

export default MenuItem;
