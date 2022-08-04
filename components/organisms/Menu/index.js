import clsx from "clsx";
import LanguageItem from "components/atoms/LanguageItem";
import MenuItem from "components/atoms/MenuItem";
import React, { Fragment, useState } from "react";
import ClosingIcon from "src/assets/svgs/closing";
import HamburgerIcon from "src/assets/svgs/hamburger";
import LanguageIcon from "src/assets/svgs/language";
import useAppContext from "src/lib/useAppContext";

const Menu = () => {
  const MENUITEMS = ["about", "mission", "participate", "resources", "contact"];

  const LANGUAGES = [
    "de",
    "en",
    "fr",
    "es",
    "vi",
    "tr",
    "bn",
    "ar",
    "fa",
  ];

  const {
    appState: { menuIsOpen, languageMenuIsOpen },
    setAppState,
  } = useAppContext();

  return (
    <div className="fixed w-full bottom-0 md:top-0 h-max p-xs md:px-0">
      <ul
        className={clsx(
          "md:w-[760px] lg:w-[1192px] mx-auto md:flex flex-col md:flex-row justify-evenly items-center relative",
          menuIsOpen ? "flex" : "hidden"
        )}
      >
        {MENUITEMS.map((item, index) => (
          <Fragment key={index}>
            <MenuItem item={item} />
          </Fragment>
        ))}
        <li className="hidden md:block relative">
          <button
            onClick={() =>
              setAppState((prev) => ({
                ...prev,
                languageMenuIsOpen: !languageMenuIsOpen,
              }))
            }
            className="w-[72px] hover:scale-110 transition-all duration-200 ease-in-out"
          >
            {languageMenuIsOpen ? <ClosingIcon /> : <LanguageIcon />}
          </button>
          <ul
            className={clsx(
              languageMenuIsOpen ? "flex absolute" : "hidden",
              "flex-col right-0"
            )}
          >
            {LANGUAGES.map((language, index) => (
              <Fragment key={index}>
                <LanguageItem item={language} />
              </Fragment>
            ))}
          </ul>
        </li>
      </ul>

      <ul
        className={clsx(
          languageMenuIsOpen ? "flex" : "hidden",
          "md:hidden flex-col"
        )}
      >
        {LANGUAGES.map((language, index) => (
          <Fragment key={index}>
            <LanguageItem item={language} />
          </Fragment>
        ))}
      </ul>

      <div className="flex justify-between md:hidden">
        <button
          onClick={() =>
            setAppState((prev) => ({
              ...prev,
              menuIsOpen: !menuIsOpen,
            }))
          }
          className="w-[90px]"
        >
          {menuIsOpen ? <ClosingIcon /> : <HamburgerIcon />}
        </button>
        <button
          onClick={() =>
            setAppState((prev) => ({
              ...prev,
              languageMenuIsOpen: !languageMenuIsOpen,
            }))
          }
          className="w-[90px]"
        >
          {languageMenuIsOpen ? <ClosingIcon /> : <LanguageIcon />}
        </button>
      </div>
    </div>
  );
};

export default Menu;
