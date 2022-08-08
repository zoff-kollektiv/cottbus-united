import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import clsx from "clsx";

const LanguageMenu = ({ className = "" }) => {
  const LANGUAGES = ["de", "en", "fr", "es", "vi", "tr", "bn", "ar", "fa"];
  const { t } = useTranslation();

  return (
    <ul className={clsx(className, "flex flex-col gap-xs items-end")}>
      {LANGUAGES.map((language, index) => (
        <li key={index} className="menuButton w-max right-0">
          <button onClick={async () => await setLanguage(language)}>
            {t(`menu:${language}`)}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default LanguageMenu;
