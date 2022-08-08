import React from "react";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import clsx from "clsx";
import useAppContext from "src/lib/useAppContext";

const LanguageItem = ({ item }) => {
  const { t } = useTranslation();

  return (
    <li className="flex justify-end">
      <button
        className={clsx("menuButton", lang === item && `underline`)}
        onClick={async () => await setLanguage(item)}
      >
        {t(`menu:${item}`)}
      </button>
    </li>
  );
};

export default LanguageItem;
