import useTranslation from "next-translate/useTranslation";
import { Link } from "react-scroll";
import useAppContext from "src/lib/useAppContext";
import useWindowSize from "src/lib/useWindowSize";

const NavigationMenu = () => {
  const MENUITEMS = ["about", "mission", "participate", "resources", "contact"];
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowSize();
  const {
    appState: { menuHeight },
  } = useAppContext();

  return (
    <ul className="flex flex-1 flex-col md:flex-row gap-xs justify-between">
      {MENUITEMS.map((item, index) => (
        <li
          key={index}
          className="bg-violet md:bg-transparent menuButton md:menuItem w-max"
        >
          <Link
            to={`${item}`}
            smooth
            className="cursor-pointer"
            offset={windowWidth > 719 ? -menuHeight : 0}
          >
            {t(`menu:${item}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
