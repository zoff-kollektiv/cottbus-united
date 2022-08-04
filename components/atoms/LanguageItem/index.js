import React from "react";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import clsx from "clsx";

const LanguageItem = ({ item }) => {
  const { t, lang } = useTranslation();

  return (
    <li className="flex justify-end">
      <button
        className={clsx(
          "uppercase text-red font-bold font-barlow text-sm cursor-pointer block hover:scale-110 transition-all duration-200 ease-in-out",
          lang === item && `underline`
        )}
        onClick={async () => await setLanguage(item)}
      >
        {t(`menu:${item}`)}
      </button>
    </li>
  );
};

export default LanguageItem;
