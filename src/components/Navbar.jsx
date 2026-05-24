import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useLocale } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const HIGHLIGHT_MS = 1500;

const navItems = [
  { key: "nav.home", to: "/", hash: null },
  { key: "nav.experience", to: "/#experience", hash: "experience" },
  { key: "nav.projects", to: "/#projects", hash: "projects" },
  { key: "nav.contact", to: "/#contact", hash: "contact" },
];

const getNavKey = (item) => item.hash ?? "home";

const Navbar = () => {
  const { t } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  const [highlighted, setHighlighted] = useState(null);
  const highlightTimerRef = useRef(null);

  const highlightNav = (key) => {
    setHighlighted(key);
    if (highlightTimerRef.current) clearTimeout(highlightTimerRef.current);
    highlightTimerRef.current = setTimeout(() => {
      setHighlighted(null);
      highlightTimerRef.current = null;
    }, HIGHLIGHT_MS);
  };

  useEffect(
    () => () => {
      if (highlightTimerRef.current) clearTimeout(highlightTimerRef.current);
    },
    [],
  );

  const handleHashNav = (item) => (e) => {
    const hash = item.hash;
    highlightNav(hash);
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
      return;
    }
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    navigate({ hash }, { replace: true });
  };

  const handleHomeNav = (e) => {
    highlightNav("home");
    if (location.pathname !== "/") return;
    e.preventDefault();
    navigate({ pathname: "/" }, { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 overscroll-none border-b border-border/40 bg-background/80 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
      <div className="mx-auto max-w-content page-padding py-4 sm:py-6">
        <nav className="flex items-center gap-3">
          <ul className="nav-scroll scrollbar-none flex min-w-0 flex-1 gap-1.5 sm:gap-3">
            {navItems.map((item) => (
              <li key={item.key}>
                {item.hash ? (
                  <Link
                    to={item.to}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onClick={handleHashNav(item)}
                    className={
                      highlighted === getNavKey(item)
                        ? "nav-link-active"
                        : "nav-link-inactive"
                    }>
                    {t(item.key)}
                  </Link>
                ) : (
                  <Link
                    to={item.to}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onClick={handleHomeNav}
                    className={
                      highlighted === getNavKey(item)
                        ? "nav-link-active"
                        : "nav-link-inactive"
                    }>
                    {t(item.key)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <LanguageToggle className="shrink-0" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
