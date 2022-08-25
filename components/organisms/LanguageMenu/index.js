import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import clsx from "clsx";
import useAppContext from "src/lib/useAppContext";
import { useEffect, useRef } from "react";

const LanguageMenu = ({ className = "" }) => {
  const { setAppState } = useAppContext();
  const LANGUAGES = ["de", "en", "fr", "es", "vi", "bn", "ar", "fa"];
  const { t } = useTranslation();

  const ref = useRef(null);

  return (
    <ul className={clsx(className, "flex md:flex-col gap-2xs items-end  flex-col-reverse")} ref={ref}>
      {LANGUAGES.map((language, index) => (
        <li key={index} className="menuButton--small w-max right-0">
          <button
            onClick={async () => {
              setAppState((prev) => ({ ...prev, showLanguageMenu: false }));
              await setLanguage(language);
            }}
          >
            {t(`menu:${language}`)}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default LanguageMenu;
