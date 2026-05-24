import { LOCALES, useLocale } from "../i18n/LanguageContext";

const LanguageToggle = ({ className = "" }) => {
  const { locale, setLocale, t } = useLocale();

  const switchLocale = () => {
    const index = LOCALES.indexOf(locale);
    setLocale(LOCALES[(index + 1) % LOCALES.length]);
  };

  return (
    <button
      type="button"
      onClick={switchLocale}
      className={`inline-flex h-10 min-w-10 items-center justify-center rounded-md px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:h-9 ${className}`}
      aria-label={t("locale.switchLanguage")}
      title={locale === "en" ? t("locale.pt") : t("locale.en")}>
      {locale}
    </button>
  );
};

export default LanguageToggle;
