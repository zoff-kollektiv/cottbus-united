import React, { useEffect, useRef } from "react";
import ClosingIcon from "src/assets/svgs/closing";
import HamburgerIcon from "src/assets/svgs/hamburger";
import LanguageIcon from "src/assets/svgs/language";
import LanguageMobileIcon from "src/assets/svgs/languageMobile";
import useAppContext from "src/lib/useAppContext";
import useWindowSize from "src/lib/useWindowSize";
import LanguageMenu from "../LanguageMenu";
import NavigationMenu from "../NavigationMenu";

const Menu = () => {
  const {
    appState: { showMenu, showLanguageMenu },
    setAppState,
  } = useAppContext();

  const menuRef = useRef(null);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    setAppState((prev) => ({ ...prev, menuHeight: menuRef?.current?.clientHeight }));
  }, [menuRef, windowWidth]);

  return (
    <>
      <div className="w-full fixed top-0 z-30 bg-violet" ref={menuRef}>
        <div className="items-center justify-evenly md:gap-2xs lg:gap-xl max-w-[1192px] mx-auto p-xs hidden md:flex">
          <NavigationMenu />
          <div className="relative">
            <button
              onClick={() =>
                setAppState((prev) => ({
                  ...prev,
                  showLanguageMenu: !showLanguageMenu,
                }))
              }
              className="zoom w-[70px]"
            >
              {!showLanguageMenu ? <LanguageIcon /> : <ClosingIcon />}
            </button>
            {showLanguageMenu && (
              <LanguageMenu className="absolute right-0 pt-xs" />
            )}
          </div>
        </div>
        <div className="fixed block bottom-0 md:hidden w-full p-xs">
          <div className="flex w-full items-end pb-xs">
            <div className="flex-1">{showMenu && <NavigationMenu />}</div>
            <div className="justify-end">
              {showLanguageMenu && <LanguageMenu />}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="w-[100px] zoom"
              onClick={() =>
                setAppState((prev) => ({ ...prev, showMenu: !showMenu }))
              }
            >
              {!showMenu ? <HamburgerIcon /> : <ClosingIcon />}
            </button>
            <button
              className="w-[100px] zoom"
              onClick={() =>
                setAppState((prev) => ({
                  ...prev,
                  showLanguageMenu: !showLanguageMenu,
                }))
              }
            >
              {!showLanguageMenu ? <LanguageMobileIcon /> : <ClosingIcon />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
