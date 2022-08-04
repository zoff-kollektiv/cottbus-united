import React from "react";

const Button = ({ url, children }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className=" w-max rounded-full cursor-pointer py-sm px-lg bg-red text-violet font-infra tracking-wide text-base md:text-lg hover:scale-110 transition-all duration-200 ease-in-out">
    {children}
  </a>
);

export default Button
