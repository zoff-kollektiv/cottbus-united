export const isRTL = (lang) => {
  const RTLLangs = ["ar", "fa"];
  return RTLLangs.includes(lang) ? true : false;
};
