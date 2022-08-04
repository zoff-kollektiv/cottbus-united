import React from "react";
import MissionIcon1 from "src/assets/svgs/mission-1";
import MissionIcon2 from "src/assets/svgs/mission-2";
import MissionIcon3 from "src/assets/svgs/mission-3";
import useTranslation from "next-translate/useTranslation";

const MissionItem = ({ index }) => {
  const ICONS = [<MissionIcon1 />, <MissionIcon2 />, <MissionIcon3 />];

  const { t } = useTranslation();

  return (
    <li className="flex flex-col md:flex-row gap-xs md:gap-xl items-center md:items-start">
      <div className="w-[94px] md:w-[160px] flex-shrink-0 mx-auto">{ICONS[index]}</div>
      <div className="flex flex-col gap-xs md:gap-[8px]">
        <h3 className="font-barlowCondensed text-2xl text-red uppercase text-center md:text-left ">
          {t(`mission:${index + 1}-title`)}
        </h3>
        <span
          className="text-xs md:text-lg font-infra text-red leading-6"
          dangerouslySetInnerHTML={{ __html: t(`mission:${index + 1}-text`) }}
        />
      </div>
    </li>
  );
};

export default MissionItem;
