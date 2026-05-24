import { useEffect, useState } from "react";

import { THEME_STORAGE_KEY } from "../constants/theme";
import { useLocale } from "../i18n/LanguageContext";

const applyTheme = (toDark) => {
  const root = document.documentElement;
  if (toDark) root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem(THEME_STORAGE_KEY, toDark ? "dark" : "light");
}

const ThemeToggle = ({ className = "" }) => {
  const { t } = useLocale();
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  );

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    applyTheme(next);
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:size-9 ${className}`}
      aria-label={dark ? t("theme.switchToLight") : t("theme.switchToDark")}
      title={dark ? t("theme.lightMode") : t("theme.darkMode")}>
      {dark ? (
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden>
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
