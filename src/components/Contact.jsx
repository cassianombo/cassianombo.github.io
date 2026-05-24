import { useLocale } from "../i18n/LanguageContext";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const { t } = useLocale();

  return (
    <section id="contact" className="scroll-mt-24 flex flex-col gap-4">
      <h2 className="title text-2xl sm:text-3xl">{t("contact.title")}</h2>
      <p className="max-w-sm text-sm text-muted-foreground">
        {t("contact.intro")}
      </p>
      <a
        href="mailto:34hugooliveira@gmail.com"
        className="link break-all text-base font-medium underline-offset-4 hover:underline sm:break-normal">
        34hugooliveira@gmail.com
      </a>
      <SocialLinks className="flex gap-6 pt-2" />
    </section>
  );
};

export default Contact;
