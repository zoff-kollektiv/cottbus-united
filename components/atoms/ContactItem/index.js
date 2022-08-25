import useTranslation from "next-translate/useTranslation";
import React from "react";
import InstagramIcon from "src/assets/svgs/social/instagram";
import MailIcon from "src/assets/svgs/social/mail";
import WhatsAppIcon from "src/assets/svgs/social/whatsapp";

const ContactItem = ({ item }) => {
  const CONTACTICONS = [
    { type: "mail", icon: <MailIcon /> },
    { type: "instagram", icon: <InstagramIcon /> },
    { type: "whatsapp", icon: <WhatsAppIcon /> },
  ];

  const { t } = useTranslation();

  return (
      <a href={t(`contact:${item}-url`)} className="cursor-pointer flex flex-1 flex-col gap-sm items-center zoom">
        {CONTACTICONS.filter(({ type }) => type === item)[0].icon}
        <span className="text-violet text-lg font-bold font-infra leading-tight text-center px-sm">{t(`contact:${item}-text`)}</span>
      </a>
  );
};

export default ContactItem;
