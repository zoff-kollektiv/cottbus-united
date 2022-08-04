import clsx from "clsx";

const Layout = ({ children, className = "", id = "", noPadding = false }) => (
  <div
    className={clsx("w-screen", className, !noPadding && "md:py-xl py-2xl")}
    id={id}
  >
    <div className="md:w-[760px] lg:w-[1192px] mx-auto px-xs py-2xl">
      {children}
    </div>
  </div>
);

export default Layout;
