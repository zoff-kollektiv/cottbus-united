import useTranslation from "next-translate/useTranslation";
import React from "react";
import BookletsIcon from "src/assets/svgs/booklets";
import PostersIcon from "src/assets/svgs/posters";
import Button from "../Button";

const ResourceItem = ({ resource }) => {
  const RESOURCEICONS = [
    { type: "posters", icon: <PostersIcon /> },
    { type: "booklets", icon: <BookletsIcon /> },
  ];

  const { t } = useTranslation();

  return (
    <li className="flex flex-col items-center gap-xs">
      <span className="text-red font-infra font-bold text-base md:text-lg text-center px-sm leading-tight">
        {t(`resources:${resource}-title`)}
      </span>
      <div className="w-[256px] md:w-[400px]">
        {RESOURCEICONS.filter(({ type }) => type === resource)[0].icon}
      </div>
      <Button>{t(`resources:${resource}-button`)}</Button>
    </li>
  );
};

export default ResourceItem;
